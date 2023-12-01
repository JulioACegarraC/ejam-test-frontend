import s from './HeaderIcons.module.css'

function HeaderIcons() {

  return (
    <section className= {`${s.headerIcons} ${s.disFlex} ${s.aliItmCen} ${s.jusContCen}`}>
        
        <article className={`${s.disFlex} ${s.aliItmCen} ${s.jusContSb}`}>
        
        <img src="clarifion-logo-1.svg" alt="Clarifion"/>
        
        <div className={`${s.disFlex} ${s.jusContSb}`}>

            <img src="mcafee-logo-1.svg" alt="McAfee Logo" />

            <img src="norton-logo-1.svg" alt="Norton Logo" />

        </div>

        </article>

    </section>
  )
}

export default HeaderIcons