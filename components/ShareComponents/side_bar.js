import Pages from '../../components/Constant/index'
import { useRouter } from 'next/router'
import Link from 'next/link'
import styles from "../../styles/fix_task.module.css"

const items = [
  {
    label: 'SCOREBOARD',
    href: Pages.scoreboard,
  },
  {
    label: 'TASKBOARD',
    href: Pages.taskboard,
  },
  {
    label: 'PENDING',
    href: Pages.pending,
  },
  {
    label: 'DONE',
    href: Pages.done,
  },
  {
    label: 'GIFT',
    href: Pages.done,
  },
  // {
  //   label: 'GIFT-BOARD',
  //   href: Pages.done,
  // },
  // {
  //   label: 'CAMERA',
  //   href: Pages.done,
  // },
]

const Sidebar = ({setCurrPage, currPage, user}) => {

  return (
    <div className="relative w-full h-full overflow-hidden rounded-xl bg-base-300 p-2 text-base font-semibold text-white shadow-md rounded-none" >
      <ul className={styles.fix_side_menu}>
        {items.map((item, index) => (
          <li key={index} className="w-full">
              <span
                className={`inline-block w-full cursor-pointer rounded-full p-4 text-center duration-300
                  ${currPage == item.label ? ' bg-green-500' : ''}`}
                  onClick={()=> {
                    setCurrPage(item.label)
                  }}
              >
                {item.label}
              </span>
          </li>
        ))}
      </ul>
      <p className={styles.fix_side_footer}>
        Copyright © 2022 CSET - UITGameHackathon
      </p>
    </div>
  )
}

export default Sidebar
