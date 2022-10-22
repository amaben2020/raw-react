export function Memoization() {
  const [count, setCount] = useState(0);

  const expFunc = (count) => {
    waitSync(3000);
    return count * 90;
  };
  const resCount = expFunc(count);
  return (
    <>
      Count: {resCount}
      <input
        type='text'
        onChange={(e) => setCount(e.target.value)}
        placeholder='Set Count'
      />
    </>
  );
}
