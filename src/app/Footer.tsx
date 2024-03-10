import Image from "next/image";
import logo from "../assets/logo.png";
import facebook from "../assets/facebook.png";
import twitter from "../assets/X-twitter.png";
import instagram from "../assets/instagram.png";
import youtube from "../assets/youtube.png";


export default function Footer() {
    return <div className="flex"> <footer className="w-full px-20 py-10 bg-[url('../assets/footer-texture.png')] bg-zinc-900">
    <div className="border rounded-xl w-full h-45 bg-[url('../assets/backgroundContact.png')] bg-zinc-900 p-14
     hover:text-primaryGreen-500 hover:bg-primaryGreen-500 z-10 relative bottom-[130px] ">
      <div className="align-center text-4xl max-w-83">
        Get in touch with us in a couple of clicks
      </div>
      <div className="flex text-gray-400 mt-5">
        <li>Suggest an idea </li>
        <li className="ml-3">Report problems </li>
        <li className="ml-3">Cooperate with us</li>
      </div>
    </div>
    <div className="flex align-center py-10">
      <span className="align-center max-w-80 mr-10">
        <div className="flex">
          <Image src={logo} alt="лого"/>
        </div>
        <div>
          <p className="text-xl">Начните отслеживать свое психическое здоровье с нашего сервиса.</p>
        </div>
      </span>

      <span className="flex ml-auto">
        <div className="flex justify-end mr-10">
          <ul className="mr-20">
            <li className="mb-5"><strong className="text-xl">Обзор</strong></li>
            <li className="mb-2">Главная</li>
            <li className="mb-2">Проблема и решение</li>
            <li className="mb-2">Функционал</li>
            <li className="mb-2">Свяжитесь с нами</li>
          </ul>

          <ul className="mr-20">
            <li className="mb-5"><strong className="text-xl">Сервис</strong></li>
            <li className="mb-2">Панель управления</li>
            <li className="mb-2">Поиск психолога</li>
            <li className="mb-2">Связь</li>
            <li className="mb-2">Быстрая поддержка</li>
            <li className="mb-2">Исследования</li>
          </ul>

          <ul className="mr-20">
            <li className="mb-5"><strong className="text-xl">Особенности</strong></li>
            <li className="mb-2">Главная</li>
            <li className="mb-2">Проблема и решение</li>
            <li className="mb-2">Функционал</li>
            <li className="mb-2">Свяжитесь с нами</li>
          </ul>
        </div>
      </span>
    </div>


    <div className="flex h-20 border-t items-center">
      <div className="b-t-white-20 flex justify-start">
        <p>&copy; 2024 mindconnect. Все права защищены.</p>
      </div>

      <div className="flex ml-auto">
        <a className="mr-2" href="#">
          <Image className="w-5 h-5" src={youtube} alt="YouTube" />
        </a>
        <a className="mr-2" href="#">
          <Image className="w-5 h-5" src={facebook} alt="Facebook" />
        </a>
        <a className="mr-2" href="#">
          <Image className="w-5 h-5" src={instagram} alt="Instagram" />
        </a>
        <a href="#">
          <Image className="w-5 h-5" src={twitter} alt="Twitter" />
        </a>
      </div>
    </div>
  </footer>
  </div>
}