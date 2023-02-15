import "./Smartphones.css"

const Smartphones = () => {


const phones = ["iPhone", "Galaxy", "Redmi", "OnePlus"];

return <div>

    
    <ul>
        {phones.map((phone) => {
            return <li key={phone}>{phone}</li>
        })}
    </ul>
</div>

}

export default Smartphones;
