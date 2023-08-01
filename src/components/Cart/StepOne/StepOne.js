import styles from "./StepOne.module.scss"
import { Basket } from "./Basket"
import { Resume } from "./Resume"

const StepOne = (props) => {

    const { games } = props

    // console.log(games)
  return (
    <div className={styles.stepOne}>
        <div className={styles.center}>
            <Basket games={games}/>
        </div>
        <div className={styles.right}>
          <Resume games={games}/>
        </div>
    </div>
  )
}

export { StepOne }