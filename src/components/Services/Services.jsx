import BlockHeader from "../ui/BlockHeader/BlockHeader";
import styles from "./services.module.scss";

const Services = () => {
    return (
        <div className={styles.services} id="services">
            <BlockHeader text={"Услуги"} />
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>брови</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>коррекция бровей + окрашивание</td>
                        <td>900</td>
                    </tr>
                    <tr>
                        <td>коррекция бровей без окрашивания (воск/ пинцет)</td>
                        <td>700</td>
                    </tr>
                    <tr>
                        <td>окрашивание бровей без коррекции</td>
                        <td>700</td>
                    </tr>
                    <tr>
                        <td>
                            Долговременная укладка бровей
                        </td>
                        <td>1200</td>
                    </tr>
                    <tr>
                        <td>
                            Долговременная укладка бровей с коррекцией или
                            окрашиванием
                        </td>
                        <td>1300</td>
                    </tr>
                    <tr>
                        <td>
                            Долговременная укладка бровей + окрашивание +
                            коррекция
                        </td>
                        <td>1500</td>
                    </tr>
                    <tr>
                        <td>Осветление бровей + коррекция (воск/ пинцет)</td>
                        <td>1000</td>
                    </tr>
                    <tr>
                        <td>Осветление бровей без коррекции</td>
                        <td>300</td>
                    </tr>
                    <tr>
                        <td>Мужская коррекция бровей</td>
                        <td>700</td>
                    </tr>
                </tbody>

                <thead>
                    <tr>
                        <th>ресницы</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            ламинирование ресниц
                        </td>
                        <td>1800</td>
                    </tr>
                    <tr>
                        <td>
                            снятие наращенных ресниц
                        </td>
                        <td>300</td>
                    </tr>
                </tbody>
                <thead>
                    <tr>
                        <th>другое</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Комплекс: верхняя губа, подбородок, в носу, щеки, бакенбарды, лоб</td>
                        <td>1000</td>
                    </tr>
                    <tr>
                        <td>Удаление волос на лице: верхняя губа/ подбородок/ в носу/ лоб/ щёки</td>
                        <td>300</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Services;
