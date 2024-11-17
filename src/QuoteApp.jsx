import { GoArrowUpRight } from "react-icons/go";
import { Button } from "./componets/Button"
import { Divider } from "./componets/Divider";
import { Loader } from "./componets/Loader";
import { useFetch } from "./hooks/useFetch"

export const QuoteApp = () => {

  const { data, fetchData, isLoading } = useFetch('https://api.adviceslip.com/advice')

  const { id, advice } = !!data && data;

  return (
    <main>
      {isLoading
        ? <Loader />

        : <div className="quote-card animate__animated animate__fadeIn animate__fast">
          <div className="block-quote">
            <p className="author">Advice 	&#35;{id}</p>
            <p className="quote">{`" ${advice} "`}</p>
          </div>
          <Divider />
          <p className="credits">Made By <span><a href="https://github.com/Harsh2676">Harsh<GoArrowUpRight size={20} /></a></span></p>
          <Button customFunction={() => fetchData()} />
        </div>
      }
    </main>
  )
}
