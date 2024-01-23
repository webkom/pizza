



import { KeyboardEvent, useEffect } from 'react'
// etc...

const Component = () => {

  useEffect(() => {
    const keyDownHandler = (e:any) => console.log(`You pressed ${e.code}.`);
    document.addEventListener("keydown", keyDownHandler);

    // clean up
    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, []);

  return <main>Press a key</main>;
};