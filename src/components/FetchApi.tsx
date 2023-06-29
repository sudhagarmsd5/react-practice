import { useEffect, useState } from "react"

const API_URL = 'https://api.dictionaryapi.dev/api/v2/entries/en/'

function FetchApi() {

  const [response, setResponse] = useState([]);
  const dictionary = async (word: string) => {
    try {
      const req = await fetch(`${API_URL}${word}`);
      const res = await req.json();
      setResponse(res);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    dictionary('applause')
  }, [])

  return (
    <>
      {JSON.stringify(response)}
    </>
  )

}

export default FetchApi