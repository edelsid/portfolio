import data from "../../../assets/data/socials.json" with { type: "json" };
import Socials from "../../Socials";

export default function Contacts() {
  return (
    <div className="contacts">
      <h4 className="title title_footer">Свяжитесь со мной</h4>
      <div className="contacts__content">
        <p className="contacts__mail">email@email</p>
        <Socials data={data} isFooter={true}/>
      </div>
    </div>
  )
}
