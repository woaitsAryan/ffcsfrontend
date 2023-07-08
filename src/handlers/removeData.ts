interface ScheduleEntry {
    day: string;
    data: string[][];
  }
  
  function removeData(
    schedule: ScheduleEntry[],
    subjectCode: string,
    slot: string
  ): ScheduleEntry[] {
    const updatedEntries = schedule.map((entry) => {
      const updatedData: [string, string][] = entry.data.map(([slotCode, subject]) => {
        const slotElements = slot.split("+");
        const slotToCheck = slotCode.split("/");

        const hasCommonElement = slotElements.some((element) => slotToCheck.includes(element));
  
        if (
          (hasCommonElement) &&
          subject === subjectCode
        ) {
          return [slotCode, ""];
        } else {
          return [slotCode, subject];
        }
      });
  
      return { ...entry, data: updatedData };
    });
  
    return updatedEntries;
  }

export default removeData;
  