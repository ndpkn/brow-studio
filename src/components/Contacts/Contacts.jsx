import BlockHeader from "../ui/BlockHeader/BlockHeader";
import Button from "../ui/Button/Button";

const Contacts = () => {
  const buttons = [
    { text: 'Telegram', link: 'https://t.me/evelina_maslova' },
    { text: 'WhatsApp', link: 'https://wa.me/79889403730' },
    { text: 'Онлайн-запись', link: 'https://dikidi.ru/#widget=127872' },
    { text: 'Позвонить', link: 'tel:+79889493730' },
  ];

  return (
    <div id="contacts">
      <BlockHeader text={'Контакты'} />
      {buttons.map((button, index) => (
        <Button key={index} text={button.text} link={button.link} />
      ))}
    </div>
  );
};

export default Contacts;
