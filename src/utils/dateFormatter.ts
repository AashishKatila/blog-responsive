export function getDate({date}:{date:string}) {

  const actualDate = new Date(date)
    
  const formattedDate = actualDate.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
      return  formattedDate;
  }