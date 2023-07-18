import { useState, ChangeEvent, useEffect } from "react";
import Input from "./components/Input";
import Results from "./components/Results";
import Item from "./components/Item";
import { BookProps } from "./types";

function App() {
  const [isResultsActive, setIsResultsActive] = useState<boolean>(false);
  const [inputChangeDuringLoading, setInputChangeDuringLoading] =
    useState<string>("");
  const [isDisableSearch, setIsDisableSearch] = useState<boolean>(false);
  const [result, setResult] = useState<[BookProps]>();
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [isSort, setIsSort] = useState<boolean>(false);

  useEffect(() => {
      setResult((c) => c?.sort((a: BookProps, b: BookProps) => isSort ? a.first_publish_year - b.first_publish_year : b.first_publish_year - a.first_publish_year));
  }, [isSort, result]);

  useEffect(() => {
    if (inputChangeDuringLoading && !isFetching) {
      setIsDisableSearch(true);
      setIsFetching(true);
      setInputChangeDuringLoading("");
      fetchResult(inputChangeDuringLoading);
    }
      
  }, [inputChangeDuringLoading, isFetching]);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;

    if (target?.value && isDisableSearch) {
      setInputChangeDuringLoading(target?.value);
    }

    if (target?.value && !isDisableSearch) {
      setIsDisableSearch(true);
      setIsFetching(true);
      fetchResult(e.target.value);
      setInputChangeDuringLoading("");
    } else {
      setIsResultsActive(false);
    }
  };

  const fetchResult = (value: string) => {
    fetch(`https://openlibrary.org/search.json?q=${value}`)
      .then((response) => response.json())
      .then((data) => {
        setResult(data.docs);
        setIsResultsActive(data.docs.length > 0);
        setIsDisableSearch(false);
        setIsFetching(false);
        console.log(data.docs);
      })
      .catch((error) => {
        console.error(error);
        setIsFetching(false);
      });
  };

  return (
    <div className="w-screen h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-3/6 max-w-full p-4 relative">
        <Input onChange={onChange} isLoading={isFetching} />
        <Results isActive={isResultsActive} onSort={setIsSort}>
          {result?.map((book: BookProps, i: number) => (
            <Item data={book} key={`bi-${i}`} />
          ))}
        </Results>
      </div>
    </div>
  );
}

export default App;
