
function Props() {
  const days: string[] = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
  return (<>
    <Days value={days} />
  </>)
}

function Days({ value }: days) {
  return (
    <>
      <label>days:{value.map((e: string | number, i: number) => (i ? ',' : '') + e)}</label>
    </>
  )
}

interface days {
  value: string[];
}

export default Props