import { ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface ScheduleEntry {
    day: string;
    data: string[][];
  }

  function addData(
    schedule: ScheduleEntry[],
    subjectCode: string,
    slot: string
  ): ScheduleEntry[] {
    const updatedEntries = schedule.map((entry) => {
      const updatedData: [string, string][] = entry.data.map(([slotCode, subject]) => {
        const slotElements = slot.split("+");
        const slotToCheck = slotCode.split("/");

        const hasCommonElement = slotElements.some((element) => slotToCheck.includes(element));

        if (hasCommonElement) {
          if (subject && subject !== "") {
            toast.error(`Slot ${slotCode} already has ${subject}!`);
            return [slotCode, subject];
          }
  
          return [slotCode, subjectCode];
        } else {
          return [slotCode, subject];
        }
      });
  
      return { ...entry, data: updatedData };
    });
  
    return updatedEntries;
  }

export default addData;
  