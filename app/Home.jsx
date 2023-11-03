import { data } from "@/data/data";
import Image from "next/image";

export default function Home(props) {
    const [inputText, setInputText] = useState("");
    let inputHandler = e => {
        //convert input text to lower case
        var lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
    };
    //create a new array by filtering the original array
    const filteredData = data.filter(data => {
        //if no input the return the original
        if (props.input === "") {
            return data;
        }

        //return the item which contains the user input
        else {
            return data.text.toLowerCase().includes(props.input);
        }
    });
    return (
        <div className="">
            <div className="flex">
                <input type="text" className="" placeholder="Search for movies or TV series" />
                <Image src="/icon-search.svg" alt="Search" width={24} height={24} />
            </div>
            {filteredData.map(item => (
                <div>
                    <Image src={item.thumbnail.regular?.small} alt={item.title} width={100} height={100} />
                    <p>{item.title}</p>
                </div>
            ))}
        </div>
    );
}
