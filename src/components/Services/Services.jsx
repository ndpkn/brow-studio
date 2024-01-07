import BlockHeader from "../ui/BlockHeader/BlockHeader";
import styles from "./services.module.scss";
const Services = () => {
    const servicesData = [
        {
            category: "брови",
            items: [
                { name: "коррекция бровей + окрашивание", price: 1200 },
                { name: "коррекция формы + легко прореживание (по необходимости)", price: 800 },
                { name: "коррекция + детальное прореживание внутри формы (механическое осветление)", price: 1000 },
                { name: "окрашивание бровей без коррекции", price: 900 },
                { name: "Долговременная укладка бровей", price: 1200 },
                { name: "Долговременная укладка бровей с коррекцией или окрашиванием", price: 1500 },
                { name: "Долговременная укладка бровей + окрашивание + коррекция", price: 1800 },
                { name: "Осветление бровей + коррекция (воск/ пинцет) + тонирование", price: 1500 },
                { name: "Осветление бровей + коррекция (прореживание по необходимости)", price: 1300 },
                { name: "Мужская коррекция бровей", price: 1000 },
            ],
        },
        {
            category: "ресницы",
            items: [
                { name: "ламинирование ресниц", price: 1800 },
                { name: "снятие наращенных ресниц", price: 300 },
            ],
        },
        {
            category: "другое",
            items: [
                { name: "Комплекс: верхняя губа, подбородок, в носу, щеки, бакенбарды, лоб", price: 1000 },
                { name: "Удаление волос на лице: верхняя губа/ подбородок/ в носу/ лоб/ щёки", price: 300 },
            ],
        },
    ];

    return (
        <div className={styles.services} id="services">
            <BlockHeader text={"Услуги"} />
            {servicesData.map((category) => (
                <table className={styles.table} key={category.category}>
                    <thead>
                        <tr>
                            <th>{category.category}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {category.items.map((item, index) => (
                            <tr key={index}>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ))}
        </div>
    );
};
export default Services;
