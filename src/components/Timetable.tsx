import React from 'react';
import data from './data.json';


const Timetable: React.FC = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>Theory</th>
          <th>8AM <br/> 8:50 AM</th>
          <th>9AM <br/> 9:50 AM</th>
          <th>10AM <br/> 10:50 AM</th>
          <th>11AM <br/> 11:50 AM</th>
          <th>12AM <br/> 12:50 AM</th>
          <th>--</th>
          <th>2PM <br/> 2:50 PM</th>
          <th>3PM <br/> 3:50 PM</th>
          <th>4PM <br/> 4:50 PM</th>
          <th>5PM <br/> 5:50 PM</th>
          <th>6PM <br/> 6:50 PM</th>
          <th>7PM <br/> 7:50 PM</th>
        </tr>
        <tr>
          <th>Lab</th>
          <th>8 AM <br/> 8:50 AM</th>
          <th>8:51 AM <br/> 9:40 AM</th>
          <th>9:51 AM <br/> 10:40 AM</th>
          <th>10:41 AM <br/> 11:30 AM</th>
          <th>11:40 AM <br/> 12:30 PM</th>
          <th>12:31 PM <br/> 1:20 PM</th>
          <th>2 PM <br/> 2:50PM</th>
          <th>2:51 PM <br/> 3:40PM</th>
          <th>3:51 PM <br/> 4:40PM</th>
          <th>4:41 PM <br/> 5:30PM</th>
          <th>5:40 PM <br/> 6:30PM</th>
          <th>6:31 PM <br/> 7:20PM</th>
        </tr>
      </thead>
      <tbody>
      {
        data.map((row, index:number) => (
          <tr>
            <td>{row.day}</td>
            {row.data.map((value, index:number) => (
             <td>   
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
  );
};

export default Timetable;
