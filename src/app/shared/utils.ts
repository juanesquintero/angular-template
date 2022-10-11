// import { keys } from 'ts-transformer-keys';

export const title = (text: string) => {
  return text[0].toUpperCase() + text.slice(1);
};

// export const hasProperties = (obj: any, Interface: any) => {
//   const properties = keys<Interface>();
//   return properties.reduce((acc, next)=>{
//     return obj.hasOwnProperty(acc) && obj.hasOwnProperty(next);
//   })
// }
