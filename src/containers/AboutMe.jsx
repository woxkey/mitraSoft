import { Container } from "react-bootstrap"

const AboutMe = () => {
  return (
    <Container>
        <h3>Болатов Ален. 22 года.</h3>
        <p>
            На данный момент являюсь ассистирующим преподавателем в <a target="black" href="https://attractor.school/">Attractor School</a>. Есть небольшой опыт
            в коммерческой разработке. Работаю над <a target="blank" href="https://gitlab.com/users/bolatovalen/contributed">сайтом для педиатров </a>
            Ссылка на <a target="blank" href="https://github.com/woxkey?tab=repositories">github</a> - там находятся все мои основные пет проекты, включаяя Ваше тестовое задание.
            <br />
            Основной стек у меня React - почти все проекты я пишу на нем. Знаю на хорошем уровне React Native, Next.js. Есть неплохой опыт в написании backend части на Node.js.
            <br />
            Немного о себе: Я с Алматы. Веду активный образ жизни. Люблю плавать и кататься на велосипеде. 
        </p>
    </Container>
  )
}

export default AboutMe