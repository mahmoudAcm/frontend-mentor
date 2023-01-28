import { useNavigate } from "react-router-dom";

//components
import {
  Section,
  BackButton,
  Details,
  Flag,
  LeftSide,
  RightSide,
  Infos,
  Info,
  Borders,
} from "./styles";
import { Container, Skeleton, Typography } from "@mui/material";

//icons
import ArrowLeftIcon from "../../icons/ArrowLeft";

//hooks
import useCountry from "./useCountry";

export default function Detail() {
  const navigate = useNavigate();
  // const { data, isFetching } = useCountry();

  const goBack = () => {
    navigate("/countries");
  };

  return (
    <Section>
      <Container>
        <BackButton
          variant="contained"
          startIcon={<ArrowLeftIcon />}
          onClick={goBack}
        >
          Back
        </BackButton>
        <Details>
          <LeftSide>
            {false ? (
              <Skeleton width={560} height={400} variant="rectangular" />
            ) : (
              // <Flag sx={{ backgroundImage: `url('${data?.flags.svg}')` }} />
              <Flag sx={{ backgroundImage: `url('us.svg')` }} />
            )}
          </LeftSide>
          <RightSide>
            <Typography
              variant="h4"
              fontSize="2.2rem"
              fontWeight={800}
              className="country--name"
            >
              Belgium
            </Typography>
            <Infos>
              <div className="row">
                <Info>
                  Native Name: <span>Belgie</span>
                </Info>
                <Info className="left">
                  Top Level Domain: <span>be</span>
                </Info>
              </div>
              <div className="row">
                <Info>
                  Population: <span>11,319,511</span>
                </Info>
                <Info className="left">
                  Currencies: <span>Euro</span>
                </Info>
              </div>
              <div className="row">
                <Info>
                  Region: <span>Europe</span>
                </Info>
                <Info className="left">
                  Languages: <span>Dutch, French, German</span>
                </Info>
              </div>
              <div className="row">
                <Info>
                  Sub Region: <span>Western Europe</span>
                </Info>
              </div>
              <div className="row">
                <Info>
                  Capital: <span>Brussles</span>
                </Info>
              </div>
            </Infos>
            <Infos className="sm">
              <Info>
                Top Level Domain: <span>be</span>
              </Info>
              <Info>
                Currencies: <span>Euro</span>
              </Info>
              <Info>
                Languages: <span>Dutch, French, German</span>
              </Info>
            </Infos>
            <Borders>
              Border Countries:
              <span className="borders">
                <span className="badge">France</span>
                <span className="badge">Germany</span>
                <span className="badge">Netherlands</span>
              </span>
            </Borders>
          </RightSide>
        </Details>
      </Container>
    </Section>
  );
}
