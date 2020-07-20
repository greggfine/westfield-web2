import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import websiteStyles from "./Website.module.scss";
import { Controller, Scene } from "react-scrollmagic";

const Site = ({ website }) => (
  <>
    <div className={websiteStyles.Card__myCard}>
      <Controller>
        <Scene
          duration={1500}
          reverse={false}
          triggerHook={0.7}
          classToggle={websiteStyles.Card__cardTrans}
          offset={10}
        >
          <Card className={websiteStyles.Card} key={website.name}>
            <div className={websiteStyles.Card__innerCard}>
              <Card.Img
                variant="top"
                src={website.img}
                className={websiteStyles.Card__cardImg}
              />
              <Card.Body>
                <h4 className={websiteStyles.Card__cardTitle}>
                  {website.name}
                </h4>
                <p className={websiteStyles.Card__cardText}>
                  {website.description}
                </p>
                <Button
                  variant="outline-primary"
                  href={website.link}
                  target="_blank"
                  className={websiteStyles.Card__cardBtn}
                >
                  VIEW PROJECT
                </Button>
              </Card.Body>
            </div>
          </Card>
        </Scene>
      </Controller>
    </div>
  </>
);

export default Site;
