
type Props = {
    locale : string,
    text : string
}

const Hero = ({ locale, text } : Props) => {

    const words = text.split(" ");
    const lastWord = words.pop();
    const firstPart = words.join(" ");

  return (
    <h1 className="font-bold text-gray-800 text-6xl lg:text-7xl">

        {firstPart}{" "}
        <span className="bg-linear-to-br from-fuchsia-600 to-purple-500 bg-clip-text text-transparent">
            {lastWord}
        </span>
    </h1>
  )
}

export default Hero