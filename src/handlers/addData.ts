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
            throw new Error(`Slot ${slotCode} already has a subject assigned.`);
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
  