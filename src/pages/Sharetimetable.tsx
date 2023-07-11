import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import postHandler from '../handlers/postHandler';

interface TimetableData {
    day: string;
    data: Array<[string, string]>;
}

function Timetable() {
  const { id, number } = useParams(); 
  const [responseData, setResponseData] = useState<TimetableData>({day: "", data: []});

  // Use the id and number values in your component logic
  useEffect(()  => {
    const fetchdata = async () =>{
        const payload = {"userID": id, "num": number}
        const response = await postHandler("https://ffcs-backend.csivit.com/share/find", payload, false)
        setResponseData(response.data)
    }
    fetchdata();
  }, [id, number]);

  return (
    <div>
      <h1>Timetable</h1>
      <p>ID: {id}</p>
      <p>Number: {number}</p>
      {responseData && (
        <div>
          <h2>Response Data:</h2>
          <pre>{JSON.stringify(responseData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default Timetable;
