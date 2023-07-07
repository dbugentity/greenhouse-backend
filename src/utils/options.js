export const months = [
    { id: "Jan" },
    { id: "Feb" },
    { id: "Mar" },
    { id: "Apr" },
    { id: "May" },
    { id: "Jun" },
    { id: "Jul" },
    { id: "Aug" },
    { id: "Sep" },
    { id: "Oct" },
    { id: "Nov" },
    { id: "Dec" },
  ];
  
  export const days = Array.from({ length: 31 }, (_, index) => ({
    id: (index + 1).toString(),
  }));
  
  export const monthNumbers = Array.from({ length: 12 }, (_, index) => ({
    id: (index + 1).toString(),
  }));
  
  export const years = Array.from({ length: 34 }, (_, index) => {
    const year = 1990 + index;
    return { id: year.toString() };
  });
  
  export const counts = Array.from({ length: 21 }, (_, index) => {
    return { id: index.toString() };
  });
  
  export const catBreeds = [
    { id: "Siamese" },
    { id: "Persian" },
    { id: "Maine Coon" },
    { id: "Bengal" },
    { id: "Ragdoll" },
    // Add more cat breeds as needed
  ];
  
  export const dogBreeds = [
    { id: "Miniature Poodle" },
    { id: "Labrador Retriever" },
    { id: "German Shepherd" },
    { id: "Golden Retriever" },
    { id: "French Bulldog" },
    { id: "Bulldog" },
    // Add more dog breeds as needed
  ];
  