import socials from "../../../assets/data/socials";
import Socials from "../../Socials";

export default function Contacts() {
  return (
    <div className="contacts">
      <h4 className="title title_footer">Свяжитесь со мной</h4>
      <div className="contacts__content">
        <p className="contacts__mail">email@email</p>
        <Socials data={socials} isFooter={true}/>
      </div>
    </div>
  )
}
