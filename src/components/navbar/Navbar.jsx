import Link from "next/link"
import Links from "./links/Links"
import styles from "./navbar.module.css"
import { auth } from "@/lib/auth";



const Navbar = async () => {

  const session = await auth();

  return (
    <div className={styles.container}>
      
      <div className={styles.linksContainer}>
        <Links session={session}/>
      </div>
    </div>
  )
}

export default Navbar