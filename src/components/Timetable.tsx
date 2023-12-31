import React, {useEffect, useState, forwardRef,   RefObject } from 'react';
import defaultdata from './data.json';
import styles from '../css/timetable.module.css'
import postHandler from '../handlers/postHandler';
import Cookies from 'js-cookie';
import e from 'express';

interface RowEntry {
  day: string;
  data: string[][];
}

interface TimetableProps {
  propToWatch: any; 
  timetableNum: number;
  isfriendTimetable?: boolean;
  friendTimetableinfo: any;
}

const Timetable: React.ForwardRefRenderFunction<HTMLDivElement, TimetableProps> = (props, ref) => {
  const [data, setData] = useState(localStorage.getItem('timetable') ? JSON.parse(localStorage.getItem('timetable') as string) : defaultdata);
  const[friendtimetable, setFriendTimetable] = useState(localStorage.getItem('friendtimetable') ? JSON.parse(localStorage.getItem('friendtimetable') as string) : defaultdata);
  useEffect(() => {
    const fetchTimetable = async () => {
      if(!props.isfriendTimetable){
        const token = Cookies.get('token');
        if (token) {
          try {
            const response = await postHandler('https://ffcs-backend.csivit.com/timetable/get', {}, true);
            const { timetable } = response.data;
            if(timetable[0].length > 0){
              setData(timetable[props.timetableNum]);
            }
          } catch (error) {
            console.error('Error fetching timetable:', error);
          }
        }
      }else{
        const payload = {"num": props.friendTimetableinfo.timetableid , "userID": props.friendTimetableinfo.friendid}
        const response = await postHandler("https://ffcs-backend.csivit.com/share/find", payload, false)
        const {timetable} = response.data
        localStorage.setItem('friendtimetable', JSON.stringify(timetable))
        setFriendTimetable(timetable);
      }
    }

    fetchTimetable();
  }, [props.timetableNum, props.isfriendTimetable]);

  useEffect(() => {
    const handlePropChange = () => {
      const currenttimetable = JSON.parse(localStorage.getItem('timetable') || 'null')
      const friendtimetable = JSON.parse(localStorage.getItem('friendtimetable') || 'null')
      if(props.isfriendTimetable){
        setFriendTimetable(friendtimetable);
        const friendid = props.friendTimetableinfo.friendid
        const payload = {"timetable": friendtimetable, "num": props.timetableNum , "friendid": friendid}
        postHandler('https://ffcs-backend.csivit.com/timetable/update', payload,true)
        .then((response) => {
        })
        .catch((error) => {
          console.log(error)
        })
      }
      else{
      if(currenttimetable){
        setData(currenttimetable);
        const payload = {"timetable": currenttimetable, "num": props.timetableNum , "friendid": null}
        postHandler('https://ffcs-backend.csivit.com/timetable/update', payload,true)
        .then((response) => {
        })
        .catch((error) => {
          console.log(error)
        })
      }
     }
    };
    handlePropChange(); 
  }, [props.propToWatch]);

  return (
    // <div className={styles.mainContainer}>
    <div ref = {ref}className={styles.timetableContainer}>
    <table className={styles.timetable}>
      <thead className={styles.head}>
        <tr>
          <th className={styles.rowDay}>Theory</th>
          <th className={styles.thoeryTimings}>8AM <br/> 8:50 AM</th>
          <th className={styles.thoeryTimings}>9AM <br/> 9:50 AM</th>
          <th className={styles.thoeryTimings}>10AM <br/> 10:50 AM</th>
          <th className={styles.thoeryTimings}>11AM <br/> 11:50 AM</th>
          <th className={styles.thoeryTimings}>12AM <br/> 12:50 AM</th>
          <th>--</th>
          <th className={styles.extraSpace}> </th>
          <th className={styles.thoeryTimings}>2PM <br/> 2:50 PM</th>
          <th className={styles.thoeryTimings}>3PM <br/> 3:50 PM</th>
          <th className={styles.thoeryTimings}>4PM <br/> 4:50 PM</th>
          <th className={styles.thoeryTimings}>5PM <br/> 5:50 PM</th>
          <th className={styles.thoeryTimings}>6PM <br/> 6:50 PM</th>
          <th className={styles.thoeryTimings}>7PM <br/> 7:50 PM</th>
        </tr>
        <tr>
          <th className={styles.rowDay}>Lab</th>
          <th className={styles.thoeryTimings}>8 AM <br/> 8:50 AM</th>
          <th className={styles.thoeryTimings}>8:51 AM <br/> 9:40 AM</th>
          <th className={styles.thoeryTimings}>9:51 AM <br/> 10:40 AM</th>
          <th className={styles.thoeryTimings}>10:41 AM <br/> 11:30 AM</th>
          <th className={styles.thoeryTimings}>11:40 AM <br/> 12:30 PM</th>
          <th className={styles.thoeryTimings}>12:31 PM <br/> 1:20 PM</th>
          <th></th>
          <th className={styles.thoeryTimings}>2 PM <br/> 2:50PM</th>
          <th className={styles.thoeryTimings}>2:51 PM <br/> 3:40PM</th>
          <th className={styles.thoeryTimings}>3:51 PM <br/> 4:40PM</th>
          <th className={styles.thoeryTimings}>4:41 PM <br/> 5:30PM</th>
          <th className={styles.thoeryTimings}>5:40 PM <br/> 6:30PM</th>
          <th className={styles.thoeryTimings}>6:31 PM <br/> 7:20PM</th>
        </tr>
      </thead>
      <tbody>
          {props.isfriendTimetable ? (
          friendtimetable.map((row: RowEntry, index: number) => (
            <tr key={index}>
              <td className={styles.rowDay}>{row.day}</td>
              {row.data.map((value, index: number) => (
                <td
                  key={index}
                  className={`${
                    value[0] === '' && value[1] === ''
                      ? ''
                      : value[0] !== '' && value[1] === ''
                      ? styles.slots
                      : styles.selectSlots
                  }`}
                >
                  {value[0]}
                  {value[1] && (
                    <>
                      <br />
                      {value[1]}
                    </>
                  )}
                </td>
              ))}
            </tr>
          ))
        ) : (
          data.map((row: RowEntry, index: number) => (
            <tr key={index}>
              <td className={styles.rowDay}>{row.day}</td>
              {row.data.map((value, index: number) => (
                <td
                  key={index}
                  className={`${
                    value[0] === '' && value[1] === ''
                      ? ''
                      : value[0] !== '' && value[1] === ''
                      ? styles.slots
                      : styles.selectSlots
                  }`}
                >
                  {value[0]}
                  {value[1] && (
                    <>
                      <br />
                      {value[1]}
                    </>
                  )}
                </td>
              ))}
            </tr>
          ))
        )}
      </tbody>
    </table>
    </div>
    // </div>
  );
};

const ForwardedTimetable = forwardRef(Timetable);


export default ForwardedTimetable;
