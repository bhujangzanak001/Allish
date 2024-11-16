import { useState, useEffect } from "react";

const usePageTitle = (initialTitle: string): [string, (title: string) => void] =>{
  const [title, setTitle] = useState(initialTitle);

  useEffect(() => {
    document.title = title;
  }, [title]);

  return [title, setTitle];
}

export default usePageTitle;
