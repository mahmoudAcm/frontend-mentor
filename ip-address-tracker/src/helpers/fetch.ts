export async function getData<TResult = any>(input: RequestInfo | URL) {
  const res = await fetch(input, {
    cache: "force-cache",
  });
  if (!res.ok) throw await res.json();
  return (await res.json()) as TResult;
}
