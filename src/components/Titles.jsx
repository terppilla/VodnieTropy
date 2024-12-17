import { titles } from "../data";

export default function H2Titles({type}) {
    const titleData = titles.find(title => title.type === type)
    return titleData ? 
    <div className="title-wrapper container">
        <h2>{titleData.content}</h2>
    </div>
     : null;
}