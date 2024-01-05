// import styles from './contacts.module.scss'
import BlockHeader from "../ui/BlockHeader/BlockHeader";
import Button from "../ui/Button/Button";

const Contacts = () => {
    return (
        <div id="contacts">
            <BlockHeader text={'Контакты'}/>
            <Button text={'Telegram'} link={'https://t.me/evelina_maslova'}/>
            <Button text={'WhatsApp'} link={'https://wa.me/79889403730'}/>
            <Button text={'Онлайн-запись'} link={'https://dikidi.ru/#widget=127872'}/>
            <Button text={'Позвонить'} link={'tel:+79889493730'}/>
        </div>
    );
};

export default Contacts;
