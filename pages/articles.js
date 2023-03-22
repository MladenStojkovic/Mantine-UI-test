import styles from '@/styles/Home.module.css'
import ArticleCard from '@/components/ArticleCard/ArticleCard.js'
import answerStore from "@/store/answers"

export default function Home() {
  return (
    <>
    <section className={styles.articles}>
      {answerStore.answers.map(answer => <ArticleCard article={answer} key={answer.user.name} />)}
    </section>
    </>
  )
}
