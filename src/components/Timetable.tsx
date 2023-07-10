import React, {useEffect, useState} from 'react';
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
  ref?: React.Ref<any>
}

const Timetable: React.ForwardRefRenderFunction<any, TimetableProps> = (props, ref) => {
  const [data, setData] = useState(localStorage.getItem('timetable') ? JSON.parse(localStorage.getItem('timetable') as string) : defaultdata);
  const[friendtimetable, setFriendTimetable] = useState(localStorage.getItem('friendtimetable') ? JSON.parse(localStorage.getItem('friendtimetable') as string) : defaultdata);
  useEffect(() => {
    const fetchTimetable = async () => {
      if(!props.isfriendTimetable){
        const token = Cookies.get('token');
        if (token) {
          try {
            const response = await postHandler('http://127.0.0.1:3000/timetable/get', {}, true);
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
        const response = await postHandler("http://127.0.0.1:3000/share/find", payload, false)
        const {timetable} = response.data
        localStorage.setItem('friendtimetable', JSON.stringify(timetable))
        setFriendTimetable(timetable);
        console.log("Getting friends timetable")
      }
    }

    fetchTimetable();
  }, [props.timetableNum, props.isfriendTimetable]);

  useEffect(() => {
    const handlePropChange = () => {
      const currenttimetable = JSON.parse(localStorage.getItem('timetable') || 'null')
      const friendtimetable = JSON.parse(localStorage.getItem('friendtimetable') || 'null')
      if(props.isfriendTimetable){
        console.log("Setting friends timetable")
        setFriendTimetable(friendtimetable);
        const friendid = props.friendTimetableinfo.friendid
        const payload = {"timetable": currenttimetable, "num": props.timetableNum , "friendid": friendid}
        console.log(payload)
        postHandler('http://127.0.0.1:3000/timetable/update', payload,true)
        .then((response) => {
          console.log(response)
        })
        .catch((error) => {
          console.log(error)
        })
      }
      else{
      if(currenttimetable){
        setData(currenttimetable);
        const payload = {"timetable": currenttimetable, "num": props.timetableNum , "friendid": null}
        postHandler('http://127.0.0.1:3000/timetable/update', payload,true)
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
    <div className={styles.timetableContainer}>
    <table className={styles.timetable}>
      <thead className={styles.head}>
        <tr>
          <th>Theory</th>
          <th className={styles.thoeryTimings}>8AM <br/> 8:50 AM</th>
          <th className={styles.thoeryTimings}>9AM <br/> 9:50 AM</th>
          <th className={styles.thoeryTimings}>10AM <br/> 10:50 AM</th>
          <th className={styles.thoeryTimings}>11AM <br/> 11:50 AM</th>
          <th className={styles.thoeryTimings}>12AM <br/> 12:50 AM</th>
          <th>--</th>
          <th>Lunch</th>
          <th className={styles.thoeryTimings}>2PM <br/> 2:50 PM</th>
          <th className={styles.thoeryTimings}>3PM <br/> 3:50 PM</th>
          <th className={styles.thoeryTimings}>4PM <br/> 4:50 PM</th>
          <th className={styles.thoeryTimings}>5PM <br/> 5:50 PM</th>
          <th className={styles.thoeryTimings}>6PM <br/> 6:50 PM</th>
          <th className={styles.thoeryTimings}>7PM <br/> 7:50 PM</th>
        </tr>
        <tr>
          <th>Lab</th>
          <th className={styles.thoeryTimings}>8 AM <br/> 8:50 AM</th>
          <th className={styles.thoeryTimings}>8:51 AM <br/> 9:40 AM</th>
          <th className={styles.thoeryTimings}>9:51 AM <br/> 10:40 AM</th>
          <th className={styles.thoeryTimings}>10:41 AM <br/> 11:30 AM</th>
          <th className={styles.thoeryTimings}>11:40 AM <br/> 12:30 PM</th>
          <th className={styles.thoeryTimings}>12:31 PM <br/> 1:20 PM</th>
          <th>Lunch</th>
          <th className={styles.thoeryTimings}>2 PM <br/> 2:50PM</th>
          <th className={styles.thoeryTimings}>2:51 PM <br/> 3:40PM</th>
          <th className={styles.thoeryTimings}>3:51 PM <br/> 4:40PM</th>
          <th className={styles.thoeryTimings}>4:41 PM <br/> 5:30PM</th>
          <th className={styles.thoeryTimings}>5:40 PM <br/> 6:30PM</th>
          <th className={styles.thoeryTimings}>6:31 PM <br/> 7:20PM</th>
        </tr>
      </thead>
      <tbody>
      {
        data.map((row: RowEntry, index:number) => (
          <tr>
            <td>{row.day}</td>
            {row.data.map((value, index:number) => (
             <td className={`${value[0]==='' && value[1]===''?'':(value[0]!=='' && value[1]===''?styles.slots:styles.selectSlots)}`}>   
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
      }
      </tbody>
    </table>
    </div>
    // </div>
  );
};

const ForwardedTimetable = React.forwardRef(Timetable);


export default ForwardedTimetable;
