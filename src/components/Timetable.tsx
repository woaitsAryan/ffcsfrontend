import React, {useEffect, useState} from 'react';
import defaultdata from './data.json';
import styles from '../css/timetable.module.css'
import postHandler from '../handlers/postHandler';
import Cookies from 'js-cookie';

const Timetable: React.FC = () => {
  const [data, setData] = useState(defaultdata);

  useEffect(() => {
    const fetchTimetable = async () => {
      const token = Cookies.get('token');
      if (token) {
        try {
          const response = await postHandler('http://127.0.0.1:3000/timetable/get', {}, true);
          const { timetable } = response.data;
          console.log(response)
          if(timetable.length != 0){
            setData(timetable[0]);
          }
        } catch (error) {
          console.error('Error fetching timetable:', error);
        }
      }
    };

    fetchTimetable();
  }, []);

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
        data.map((row, index:number) => (
          <tr>
            <td>{row.day}</td>
            {row.data.map((value, index:number) => (
             <td className={value[0]===''?styles.lunch:styles.slots}>   
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

export default Timetable;
