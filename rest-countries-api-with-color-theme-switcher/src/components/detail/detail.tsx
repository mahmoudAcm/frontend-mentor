import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

//components
import {
  Section,
  BackButton,
  Details,
  Flag,
  LeftSide,
  RightSide,
  InfosContainer,
  Infos,
  Info,
  Borders,
  FlagSkeleton,
  RightSideLoadingScreen,
} from "./styles";
import { Container, Typography, CircularProgress } from "@mui/material";

//icons
import ArrowLeftIcon from "../../icons/ArrowLeft";

//hooks
import useCountry from "./useCountry";

export default function Detail() {
  const navigate = useNavigate();
  const { data, isFetching } = useCountry();

  useEffect(() => {
    document.documentElement.style.setProperty("--font-size", "16px");
  }, []);

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
            {isFetching ? (
              <FlagSkeleton variant="rectangular" />
            ) : (
              // <Flag sx={{ backgroundImage: `url('${data?.flags.svg}')` }} />
              <Flag sx={{ backgroundImage: `url('us.svg')` }} />
            )}
          </LeftSide>
          {isFetching ? (
            <RightSideLoadingScreen>
              <CircularProgress disableShrink />
            </RightSideLoadingScreen>
          ) : (
            <RightSide>
              <>
                <Typography
                  variant="h4"
                  fontSize="1.9rem"
                  fontWeight={800}
                  className="country--name"
                >
                  {data?.name}
                </Typography>
                <InfosContainer>
                  <Infos>
                    <div className="row">
                      {data?.nativeName ? (
                        <Info>
                          Native Name: <span>{data?.nativeName}</span>
                        </Info>
                      ) : (
                        <></>
                      )}
                    </div>
                    <div className="row">
                      {data?.population ? (
                        <Info>
                          Population: <span>{data?.population}</span>
                        </Info>
                      ) : (
                        <></>
                      )}
                    </div>
                    <div className="row">
                      {data?.region ? (
                        <Info>
                          Region: <span>{data?.region}</span>
                        </Info>
                      ) : (
                        <></>
                      )}
                    </div>
                    <div className="row">
                      {data?.subregion ? (
                        <Info>
                          Sub Region: <span>{data?.subregion}</span>
                        </Info>
                      ) : (
                        <></>
                      )}
                    </div>
                    <div className="row">
                      {data?.capital ? (
                        <Info>
                          Capital: <span>{data?.capital}</span>
                        </Info>
                      ) : (
                        <></>
                      )}
                    </div>
                  </Infos>
                  <Infos>
                    <div className="row">
                      {data?.tld ? (
                        <Info>
                          Top Level Domain: <span>{data?.tld}</span>
                        </Info>
                      ) : (
                        <></>
                      )}
                    </div>
                    <div className="row">
                      {data?.currencies ? (
                        <Info>
                          Currencies: <span>{data?.currencies}</span>
                        </Info>
                      ) : (
                        <></>
                      )}
                    </div>
                    <div className="row">
                      {data?.languages ? (
                        <Info>
                          Languages: <span>{data?.languages}</span>
                        </Info>
                      ) : (
                        <></>
                      )}
                    </div>
                  </Infos>
                </InfosContainer>
                {data?.borders?.length ? (
                  <Borders>
                    Border Countries:
                    <span className="borders">
                      {(data?.borders ?? []).map((border, idx) => (
                        <span className="badge" key={idx}>
                          {border}
                        </span>
                      ))}
                    </span>
                  </Borders>
                ) : (
                  <></>
                )}
              </>
            </RightSide>
          )}
        </Details>
      </Container>
    </Section>
  );
}
