import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const navigate = useNavigate();

  const onHistoryContainerClick = useCallback(() => {
    navigate("/history");
  }, [navigate]);

  const onAtomsContainerClick = useCallback(() => {
    navigate("/atoms");
  }, [navigate]);

  return (
    <main className="relative bg-white w-full h-[3251px] text-left text-xl text-firebrick-100 font-montserrat">
      <div className="absolute bottom-[0px] left-[0px] bg-whitesmoke box-border w-[1920px] h-[486px] text-right text-black border-[1px] border-solid border-dimgray-200">
        <div className="absolute top-[calc(50%_-_61px)] left-[calc(50%_-_13px)] w-[684.09px] h-[166.02px]">
          <div className="absolute w-[calc(100%_+_0.91px)] top-[calc(50%_+_0.99px)] left-[0px] leading-[25px] inline-block">
            Terms of Service | Privacy Policy | Cookie Policy | License | Status
          </div>
          <img
            className="absolute right-[0px] bottom-[0px] w-[295.09px] h-[35.02px]"
            alt=""
            src="/smlinks.svg"
          />
          <img
            className="absolute top-[0px] right-[0.09px] w-[382px] h-[63px] object-cover"
            alt=""
            src="/uniclogo@2x.png"
          />
        </div>
        <div className="absolute top-[calc(50%_-_91px)] left-[calc(50%_-_671px)] w-[684px] h-[190px] text-left">
          <div className="absolute w-full right-[0px] bottom-[0px] left-[0px] h-[76px]">
            <div className="absolute w-[calc(100%_+_1px)] bottom-[0px] left-[0px] leading-[25px] inline-block">
              Copyright © University of Nicosia. All Rights Reserved
            </div>
            <div className="absolute top-[0px] left-[0px] leading-[25px] inline-block w-[480px]">
              The world’s first [text] [text] [text] [text] [text]
            </div>
          </div>
          <img
            className="absolute top-[0px] left-[0px] w-[370px] h-[105px] object-cover"
            alt=""
            src="/atomslogo@2x.png"
          />
        </div>
      </div>
      <div className="absolute top-[2256.83px] left-[289px] w-[1342px] h-[421.82px] text-center text-26xl">
        <div className="absolute bottom-[0px] left-[calc(50%_-_162.83px)] w-[325.98px] h-[66.82px] text-11xl">
          <img
            className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/path-20.svg"
          />
          <b className="absolute top-[calc(50%_-_17.76px)] left-[29.83px]">
            View All Projects
          </b>
        </div>
        <div className="absolute top-[calc(50%_-_63.91px)] right-[0px] w-[278px] h-[132px] text-6xl">
          <b className="absolute w-[calc(100%_+_1px)] bottom-[0px] left-[0px] leading-[30px] inline-block">
            <p className="m-0">Funds</p>
            <p className="m-0">Allocated</p>
          </b>
          <div className="absolute w-[calc(100%_+_1px)] top-[0px] left-[0px] text-26xl font-quinquefive inline-block">
            100K+
          </div>
        </div>
        <div className="absolute top-[calc(50%_-_63.91px)] left-[calc(50%_+_38px)] w-[278px] h-[132px] text-6xl">
          <b className="absolute w-[calc(100%_+_1px)] bottom-[0px] left-[0px] leading-[30px] inline-block">
            <p className="m-0">Funds</p>
            <p className="m-0">Gathered</p>
          </b>
          <div className="absolute w-[calc(100%_+_1px)] top-[0px] left-[0px] text-26xl font-quinquefive inline-block">
            1M+
          </div>
        </div>
        <div className="absolute top-[calc(50%_-_63.91px)] left-[calc(50%_-_316px)] w-[278px] h-[132px] font-quinquefive">
          <div className="absolute w-[calc(100%_+_1px)] top-[0px] left-[0px] inline-block">
            10+
          </div>
          <b className="absolute w-[calc(100%_+_1px)] bottom-[0px] left-[0px] text-6xl leading-[30px] inline-block font-montserrat">
            <p className="m-0">Completed</p>
            <p className="m-0">Projects</p>
          </b>
        </div>
        <div className="absolute top-[calc(50%_-_63.91px)] left-[0px] w-[278px] h-[132px] font-quinquefive">
          <div className="absolute w-[calc(100%_+_1px)] top-[0px] left-[0px] inline-block">
            42
          </div>
          <b className="absolute w-[calc(100%_+_1px)] bottom-[0px] left-[0px] text-6xl leading-[30px] inline-block font-montserrat">
            <p className="m-0">Pending</p>
            <p className="m-0">Projects</p>
          </b>
        </div>
        <div className="absolute top-[0px] left-[calc(50%_-_329px)] font-quinquefive text-left inline-block w-[659px]">
          ACHIEVEMENTS
        </div>
      </div>
      <div className="absolute top-[1626px] left-[0px] bg-whitesmoke box-border w-[1920px] h-[542px] text-11xl border-[1px] border-solid border-dimgray-200">
        <div className="absolute h-[calc(100%_-_148px)] top-[78px] right-[231px] bottom-[70px] w-[702px] bg-[url(/public/col12@3x.png)] bg-cover bg-no-repeat bg-[top]" />
        <div className="absolute h-[calc(100%_-_148px)] top-[78px] bottom-[70px] left-[232px] w-[684px]">
          <div className="absolute bottom-[0px] left-[calc(50%_-_12.32px)] w-[227.88px] h-[66.82px]">
            <img
              className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/path-22.svg"
            />
            <b className="absolute top-[calc(50%_-_17.76px)] left-[20.24px]">
              Get Funded!
            </b>
          </div>
          <div className="absolute bottom-[0px] left-[0px] w-[294.31px] h-[66.82px]">
            <img
              className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/path-21.svg"
            />
            <b className="absolute top-[calc(50%_-_17.76px)] left-[20.24px]">
              Submit Proposal
            </b>
          </div>
          <div className="absolute w-[calc(100%_+_1px)] top-[calc(50%_-_62px)] left-[0px] text-xl leading-[25px] text-black inline-block">{`Research is “creative and systematic work undertaken to increase the stock of knowledge”.[1] It involves the collection, organization and analysis of evidence to increase understanding of a topic, characterized by a particular attentiveness to controlling sources of bias and error. These activities are characterized by accounting and controlling for biases. `}</div>
          <div className="absolute w-[calc(100%_-_88px)] top-[0px] left-[0px] text-26xl leading-[60px] font-quinquefive inline-block">
            <p className="m-0">VOTE FOR</p>
            <p className="m-0">SCIENCE</p>
          </div>
        </div>
      </div>
      <div className="absolute top-[1142px] left-[232px] w-[1457px] h-[408px] text-dimgray-100">
        <img
          className="absolute bottom-[0px] left-[calc(50%_-_271.5px)] w-[541.45px] h-[24.47px]"
          alt=""
          src="/navigation.svg"
        />
        <div className="absolute top-[calc(50%_+_5.09px)] right-[0px] w-[67.35px] h-[67.35px]">
          <img
            className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/path-9.svg"
          />
          <div className="absolute top-[calc(50%_-_23.39px)] left-[calc(50%_-_23.39px)] w-[46.77px] h-[46.77px] [transform:_rotate(180deg)]">
            <div className="absolute top-[calc(50%_-_4.96px)] left-[calc(50%_-_13.47px)] bg-white w-[8.5px] h-[9.92px]" />
            <div className="absolute top-[calc(50%_+_4.96px)] left-[calc(50%_+_4.96px)] bg-white w-[8.5px] h-[8.5px]" />
            <div className="absolute top-[36.85px] left-[calc(50%_-_4.96px)] bg-white w-[9.92px] h-[9.92px]" />
            <div className="absolute top-[calc(50%_-_4.96px)] right-[36.85px] bg-white w-[9.92px] h-[9.92px]" />
            <div className="absolute top-[calc(50%_-_4.96px)] left-[calc(50%_-_4.96px)] bg-white w-[9.92px] h-[9.92px]" />
            <div className="absolute bottom-[36.85px] left-[calc(50%_-_4.96px)] bg-white w-[9.92px] h-[9.92px]" />
            <div className="absolute top-[calc(50%_-_4.96px)] left-[36.85px] bg-white w-[9.92px] h-[9.92px]" />
            <div className="absolute top-[calc(50%_-_4.96px)] left-[calc(50%_+_4.96px)] bg-white w-[8.5px] h-[9.92px]" />
            <div className="absolute top-[calc(50%_-_13.47px)] left-[calc(50%_+_4.96px)] bg-white w-[8.5px] h-[8.5px]" />
          </div>
        </div>
        <div className="absolute w-[calc(100%_-_235px)] right-[117px] bottom-[45.8px] left-[118px] h-[237px]">
          <img
            className="absolute h-full top-[0px] bottom-[0px] left-[0px] max-h-full w-[237px] object-cover"
            alt=""
            src="/artboard-1-copy-21@2x.png"
          />
          <img
            className="absolute h-full top-[0px] bottom-[0px] left-[calc(50%_-_365px)] max-h-full w-[237px] object-cover"
            alt=""
            src="/artboard-1-copy-2@2x.png"
          />
          <img
            className="absolute h-full top-[0px] bottom-[0px] left-[calc(50%_-_118px)] max-h-full w-[237px] object-cover"
            alt=""
            src="/artboard-1-copy-41@2x.png"
          />
          <img
            className="absolute h-full top-[0px] bottom-[0px] left-[calc(50%_+_128px)] max-h-full w-[237px] object-cover"
            alt=""
            src="/artboard-1-copy-42@2x.png"
          />
          <img
            className="absolute h-full top-[0px] right-[0px] bottom-[0px] max-h-full w-[237px] object-cover"
            alt=""
            src="/artboard-1-copy-43@2x.png"
          />
        </div>
        <div className="absolute top-[calc(50%_+_5.09px)] left-[0px] w-[67.35px] h-[67.35px]">
          <img
            className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/path-8.svg"
          />
          <div className="absolute top-[calc(50%_-_23.39px)] left-[calc(50%_-_23.39px)] w-[46.77px] h-[46.77px]">
            <div className="absolute top-[calc(50%_-_4.96px)] left-[calc(50%_+_4.96px)] bg-firebrick-200 w-[8.5px] h-[9.92px]" />
            <div className="absolute top-[calc(50%_-_13.47px)] left-[calc(50%_-_13.47px)] bg-firebrick-200 w-[8.5px] h-[8.5px]" />
            <div className="absolute top-[0px] left-[calc(50%_-_4.96px)] bg-firebrick-200 w-[9.92px] h-[9.92px]" />
            <div className="absolute top-[calc(50%_-_4.96px)] right-[0px] bg-firebrick-200 w-[9.92px] h-[9.92px]" />
            <div className="absolute top-[calc(50%_-_4.96px)] left-[calc(50%_-_4.96px)] bg-firebrick-200 w-[9.92px] h-[9.92px]" />
            <div className="absolute bottom-[0px] left-[calc(50%_-_4.96px)] bg-firebrick-200 w-[9.92px] h-[9.92px]" />
            <div className="absolute top-[calc(50%_-_4.96px)] left-[0px] bg-firebrick-200 w-[9.92px] h-[9.92px]" />
            <div className="absolute top-[calc(50%_-_4.96px)] left-[calc(50%_-_13.47px)] bg-firebrick-200 w-[8.5px] h-[9.92px]" />
            <div className="absolute top-[calc(50%_+_4.96px)] left-[calc(50%_-_13.47px)] bg-firebrick-200 w-[8.5px] h-[8.5px]" />
          </div>
        </div>
        <div className="absolute top-[calc(50%_-_141.11px)] left-[0px] font-light">
          View all Atoms
        </div>
        <div className="absolute top-[0px] left-[0px] text-26xl font-quinquefive text-firebrick-100 inline-block w-[711px]">
          Atoms HISTORY
        </div>
      </div>
      <div className="absolute top-[224px] left-[3px] w-[1920px] h-[860px] text-center text-6xl text-slategray">
        <div className="absolute w-full right-[0px] bottom-[0px] left-[0px] bg-whitesmoke box-border h-[293px] border-[1px] border-solid border-dimgray-200">
          <div className="absolute top-[calc(50%_-_60.5px)] right-[233.1px] text-black text-left inline-block w-[716.84px] h-[153.11px]">
            The smallest part of a substance that cannot be broken down
            chemically. Each atom has a nucleus (center) made up of protons
            (positive particles) and neutrons (particles with no charge).
            Electrons (negative particles) move around the nucleus.
          </div>
          <b className="absolute top-[31px] left-[calc(50%_+_10.31px)] text-16xl text-firebrick-100 text-left">
            ATOM #001
          </b>
          <div className="absolute top-[calc(50%_-_43.5px)] left-[calc(50%_-_178px)] w-16 h-[136px]">
            <div className="absolute bottom-[0px] left-[0px]">
              <p className="m-0 font-light">Body</p>
              <p className="m-0 font-semibold">5%</p>
            </div>
            <img
              className="absolute w-[calc(100%_-_4px)] top-[0px] right-[2px] left-[2px] max-w-full overflow-hidden h-[60px]"
              alt=""
              src="/path-37.svg"
            />
          </div>
          <div className="absolute top-[calc(50%_-_43.5px)] left-[calc(50%_-_391px)] w-[122px] h-[136px]">
            <div className="absolute bottom-[0px] left-[0px]">
              <p className="m-0 font-light">Accessory</p>
              <p className="m-0 font-semibold">42%</p>
            </div>
            <img
              className="absolute top-[0px] left-[calc(50%_-_32px)] w-[60px] h-[60.47px]"
              alt=""
              src="/iconaccessory.svg"
            />
          </div>
          <div className="absolute top-[calc(50%_-_43.5px)] left-[calc(50%_-_548px)] w-[66px] h-[136px]">
            <div className="absolute bottom-[0px] left-[0px]">
              <p className="m-0 font-light">Head</p>
              <p className="m-0 font-semibold">10%</p>
            </div>
            <div className="absolute w-[calc(100%_-_6px)] top-[0px] right-[3px] left-[3px] h-[60px]">
              <div className="absolute bottom-[0px] left-[calc(50%_+_7px)] bg-sandybrown w-[7px] h-2" />
              <div className="absolute bottom-[0px] left-[calc(50%_-_0px)] bg-sandybrown w-[7px] h-2" />
              <div className="absolute bottom-[0px] left-[calc(50%_-_8px)] bg-sandybrown w-2 h-2" />
              <div className="absolute bottom-[0px] left-[calc(50%_-_15px)] bg-sandybrown w-[7px] h-2" />
              <div className="absolute right-[8px] bottom-[8px] bg-sandybrown w-2 h-[7px]" />
              <div className="absolute bottom-[8px] left-[8px] bg-sandybrown w-[7px] h-[7px]" />
              <div className="absolute top-[calc(50%_+_8px)] right-[0px] bg-sandybrown w-2 h-[7px]" />
              <div className="absolute top-[calc(50%_+_8px)] left-[0px] bg-sandybrown w-2 h-[7px]" />
              <div className="absolute top-[calc(50%_-_0px)] right-[0px] bg-sandybrown w-2 h-2" />
              <div className="absolute top-[calc(50%_-_0px)] left-[calc(50%_-_15px)] bg-sandybrown w-[7px] h-2" />
              <div className="absolute top-[calc(50%_-_0px)] left-[0px] bg-sandybrown w-2 h-2" />
              <div className="absolute top-[calc(50%_-_7px)] right-[0px] bg-sandybrown w-2 h-[7px]" />
              <div className="absolute top-[calc(50%_-_0px)] left-[calc(50%_+_7px)] bg-sandybrown w-[7px] h-2" />
              <div className="absolute top-[calc(50%_-_7px)] left-[0px] bg-sandybrown w-2 h-[7px]" />
              <div className="absolute top-[calc(50%_-_14px)] right-[0px] bg-sandybrown w-2 h-[7px]" />
              <div className="absolute top-[calc(50%_-_14px)] left-[0px] bg-sandybrown w-2 h-[7px]" />
              <div className="absolute top-[8px] right-[0px] bg-sandybrown w-2 h-2" />
              <div className="absolute top-[8px] right-[8px] bg-sandybrown w-2 h-2" />
              <div className="absolute top-[8px] left-[calc(50%_+_7px)] bg-sandybrown w-[7px] h-2" />
              <div className="absolute top-[8px] left-[calc(50%_-_0px)] bg-sandybrown w-[7px] h-2" />
              <div className="absolute top-[8px] left-[calc(50%_-_8px)] bg-sandybrown w-2 h-2" />
              <div className="absolute top-[8px] left-[calc(50%_-_15px)] bg-sandybrown w-[7px] h-2" />
              <div className="absolute top-[8px] left-[8px] bg-sandybrown w-[7px] h-2" />
              <div className="absolute top-[8px] left-[0px] bg-sandybrown w-2 h-2" />
              <div className="absolute top-[0px] right-[0px] bg-sandybrown w-2 h-2" />
              <div className="absolute top-[0px] left-[0px] bg-sandybrown w-2 h-2" />
            </div>
          </div>
          <div className="absolute top-[calc(50%_-_43.5px)] left-[231px] w-[92px] h-[136px]">
            <div className="absolute bottom-[0px] left-[0px]">
              <p className="m-0 font-light">Glasses</p>
              <p className="m-0 font-semibold">1%</p>
            </div>
            <div className="absolute top-[0px] left-[calc(50%_-_29px)] w-[59px] h-[60px]">
              <div className="absolute right-[7px] bottom-[0px] bg-sandybrown w-[7px] h-2" />
              <div className="absolute bottom-[0px] left-[calc(50%_+_7.5px)] bg-sandybrown w-2 h-2" />
              <div className="absolute bottom-[0px] left-[calc(50%_-_14.5px)] bg-sandybrown w-[7px] h-2" />
              <div className="absolute bottom-[0px] left-[7px] bg-sandybrown w-2 h-2" />
              <div className="absolute right-[0px] bottom-[8px] bg-sandybrown w-[7px] h-[7px]" />
              <div className="absolute bottom-[8px] left-[calc(50%_-_7.5px)] bg-sandybrown w-[7px] h-[7px]" />
              <div className="absolute bottom-[8px] left-[0px] bg-sandybrown w-[7px] h-[7px]" />
              <div className="absolute top-[calc(50%_+_8px)] right-[0px] bg-sandybrown w-[7px] h-[7px]" />
              <div className="absolute bottom-[8px] left-[calc(50%_-_0.5px)] bg-sandybrown w-2 h-[7px]" />
              <div className="absolute top-[calc(50%_+_8px)] left-[calc(50%_-_0.5px)] bg-sandybrown w-2 h-[7px]" />
              <div className="absolute top-[calc(50%_+_8px)] left-[calc(50%_-_7.5px)] bg-sandybrown w-[7px] h-[7px]" />
              <div className="absolute top-[calc(50%_-_0px)] right-[7px] bg-sandybrown w-[7px] h-2" />
              <div className="absolute top-[calc(50%_-_0px)] left-[calc(50%_+_7.5px)] bg-sandybrown w-2 h-2" />
              <div className="absolute top-[calc(50%_-_0px)] left-[calc(50%_-_0.5px)] bg-sandybrown w-2 h-2" />
              <div className="absolute top-[calc(50%_-_0px)] left-[calc(50%_-_7.5px)] bg-sandybrown w-[7px] h-2" />
              <div className="absolute top-[calc(50%_-_0px)] left-[calc(50%_-_14.5px)] bg-sandybrown w-[7px] h-2" />
              <div className="absolute top-[calc(50%_-_0px)] left-[7px] bg-sandybrown w-2 h-2" />
              <div className="absolute top-[calc(50%_+_8px)] left-[0px] bg-sandybrown w-[7px] h-[7px]" />
              <div className="absolute top-[calc(50%_-_0px)] right-[0px] bg-sandybrown w-[7px] h-2" />
              <div className="absolute top-[calc(50%_-_0px)] left-[0px] bg-sandybrown w-[7px] h-2" />
              <div className="absolute top-[calc(50%_-_7px)] right-[0px] bg-sandybrown w-[7px] h-[7px]" />
              <div className="absolute top-[calc(50%_-_7px)] left-[0px] bg-sandybrown w-[7px] h-[7px]" />
              <div className="absolute top-[calc(50%_-_14px)] right-[0px] bg-sandybrown w-[7px] h-[7px]" />
              <div className="absolute top-[calc(50%_-_14px)] left-[0px] bg-sandybrown w-[7px] h-[7px]" />
              <div className="absolute top-[8px] right-[0px] bg-sandybrown w-[7px] h-2" />
              <div className="absolute top-[8px] left-[0px] bg-sandybrown w-[7px] h-2" />
              <div className="absolute top-[0px] right-[0px] bg-sandybrown w-[7px] h-2" />
              <div className="absolute top-[0px] right-[7px] bg-sandybrown w-[7px] h-2" />
              <div className="absolute top-[0px] left-[7px] bg-sandybrown w-2 h-2" />
              <div className="absolute top-[0px] left-[0px] bg-sandybrown w-[7px] h-2" />
            </div>
          </div>
          <b className="absolute top-[31px] left-[229px] text-16xl uppercase text-black text-left">
            Traits
          </b>
        </div>
        <div className="absolute top-[5px] right-[233.93px] w-[716.01px] h-[540.78px] text-left text-xl text-dimgray-100">
          <div className="absolute bottom-[0px] left-[0px] font-light text-center">
            View all bids
          </div>
          <div className="absolute w-full right-[0px] bottom-[32px] left-[0px] h-[151.4px] text-4xl">
            <div className="absolute w-full top-[0px] right-[0px] left-[0px] h-[47.54px]">
              <div className="absolute w-[calc(100%_+_0.36px)] right-[0.17px] bottom-[-1px] left-[-0.53px] box-border h-0.5 border-t-[1px] border-solid border-firebrick-100" />
              <div className="absolute top-[0px] right-[0px] w-[195.07px] h-[40.1px] text-center text-lg">
                <img
                  className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/path-12.svg"
                />
                <div className="absolute top-[calc(50%_-_11.52px)] left-[calc(50%_-_49.53px)]">
                  Confirmed
                </div>
              </div>
              <div className="absolute top-[5.69px] left-[42.67px]">
                0xcC…C7c9
              </div>
              <div className="absolute top-[5.69px] left-[calc(50%_-_155.8px)]">
                Ξ 3.00
              </div>
              <img
                className="absolute top-[5.69px] left-[0px] rounded-[50%] w-[28.45px] h-[28.45px]"
                alt=""
                src="/indicator.svg"
              />
              <div className="absolute top-[0px] left-[calc(50%_-_52.21px)] w-[194.77px] h-[40.1px]">
                <img
                  className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/address.svg"
                />
                <div className="absolute w-[calc(100%_-_25.71px)] top-[5.24px] right-[15.21px] left-[10.51px] h-[28.38px]">
                  <div className="absolute top-[0px] right-[-1px]">
                    0xcC…C7c9
                  </div>
                  <div className="absolute h-full top-[0px] bottom-[0px] left-[0px] w-[28.38px]">
                    <img
                      className="absolute top-[0px] right-[0px] w-[22.76px] h-[22.76px]"
                      alt=""
                      src="/path-44.svg"
                    />
                    <div className="absolute top-[calc(50%_-_2.81px)] left-[calc(50%_-_3.19px)] bg-firebrick-200 w-1.5 h-1.5" />
                    <div className="absolute bottom-[0px] left-[0px] bg-firebrick-200 w-1.5 h-1.5" />
                    <div className="absolute top-[calc(50%_+_3.19px)] left-[calc(50%_-_8.19px)] bg-firebrick-200 w-[5px] h-[5px]" />
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute w-full right-[0px] bottom-[0px] left-[0px] h-[40.1px]">
              <div className="absolute top-[5.69px] left-[42.67px]">
                0xcC…C7c9
              </div>
              <div className="absolute top-[5.69px] left-[calc(50%_-_155.8px)]">
                Ξ 3.00
              </div>
              <div className="absolute h-full top-[0px] right-[0px] bottom-[0px] w-[195.07px] text-center text-lg">
                <img
                  className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/path-16.svg"
                />
                <div className="absolute top-[calc(50%_-_11.52px)] left-[calc(50%_-_27.53px)]">
                  Failed
                </div>
              </div>
              <img
                className="absolute h-[calc(100%_-_11.66px)] top-[5.69px] bottom-[5.97px] left-[0px] rounded-[50%] max-h-full w-[28.45px]"
                alt=""
                src="/indicator1.svg"
              />
              <div className="absolute h-full top-[0px] bottom-[0px] left-[calc(50%_-_52.21px)] w-[194.77px]">
                <img
                  className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/address.svg"
                />
                <div className="absolute w-[calc(100%_-_25.71px)] top-[5.24px] right-[15.21px] left-[10.51px] h-[28.38px]">
                  <div className="absolute top-[0px] right-[-1px]">
                    0xcC…C7c9
                  </div>
                  <div className="absolute h-full top-[0px] bottom-[0px] left-[0px] w-[28.38px]">
                    <img
                      className="absolute top-[0px] right-[0px] w-[22.76px] h-[22.76px]"
                      alt=""
                      src="/path-44.svg"
                    />
                    <div className="absolute top-[calc(50%_-_2.81px)] left-[calc(50%_-_3.19px)] bg-firebrick-200 w-1.5 h-1.5" />
                    <div className="absolute bottom-[0px] left-[0px] bg-firebrick-200 w-1.5 h-1.5" />
                    <div className="absolute top-[calc(50%_+_3.19px)] left-[calc(50%_-_8.19px)] bg-firebrick-200 w-[5px] h-[5px]" />
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute w-full top-[calc(50%_-_20.42px)] right-[0px] left-[0px] h-[47.9px]">
              <div className="absolute top-[6.05px] left-[42.67px]">
                0xcC…C7c9
              </div>
              <div className="absolute top-[6.05px] left-[calc(50%_-_155.8px)]">
                Ξ 3.00
              </div>
              <div className="absolute w-[calc(100%_+_0.36px)] right-[0.17px] bottom-[-1px] left-[-0.53px] box-border h-0.5 border-t-[1px] border-solid border-firebrick-100" />
              <div className="absolute top-[0.36px] right-[0px] w-[195.07px] h-[40.1px] text-center text-lg">
                <img
                  className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/path-14.svg"
                />
                <div className="absolute top-[calc(50%_-_11.52px)] left-[calc(50%_-_39.53px)]">
                  Pending
                </div>
              </div>
              <img
                className="absolute top-[6.05px] left-[0px] rounded-[50%] w-[28.45px] h-[28.45px]"
                alt=""
                src="/indicator2.svg"
              />
              <div className="absolute top-[0px] left-[calc(50%_-_52.21px)] w-[194.77px] h-[40.1px]">
                <img
                  className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/address.svg"
                />
                <div className="absolute w-[calc(100%_-_25.71px)] top-[5.24px] right-[15.21px] left-[10.51px] h-[28.38px]">
                  <div className="absolute top-[0px] right-[-1px]">
                    0xcC…C7c9
                  </div>
                  <div className="absolute h-full top-[0px] bottom-[0px] left-[0px] w-[28.38px]">
                    <img
                      className="absolute top-[0px] right-[0px] w-[22.76px] h-[22.76px]"
                      alt=""
                      src="/path-44.svg"
                    />
                    <div className="absolute top-[calc(50%_-_2.81px)] left-[calc(50%_-_3.19px)] bg-firebrick-200 w-1.5 h-1.5" />
                    <div className="absolute bottom-[0px] left-[0px] bg-firebrick-200 w-1.5 h-1.5" />
                    <div className="absolute top-[calc(50%_+_3.19px)] left-[calc(50%_-_8.19px)] bg-firebrick-200 w-[5px] h-[5px]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-[calc(50%_+_0.33px)] right-[0.17px] w-[195.07px] h-[66.82px] text-center text-6xl text-gainsboro-100">
            <img
              className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/path-10.svg"
            />
            <b className="absolute top-[calc(50%_-_12.76px)] left-[calc(50%_-_61.53px)]">
              Place Bid
            </b>
          </div>
          <div className="absolute top-[calc(50%_+_0.33px)] left-[0px] w-[500.56px] h-[66.82px] text-11xl text-gainsboro-100">
            <img
              className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/bg.svg"
            />
            <div className="absolute top-[calc(50%_-_17.76px)] left-[20.24px]">
              Ξ 3.00 or more
            </div>
          </div>
          <div className="absolute top-[calc(50%_-_45.28px)] left-[0px] w-[281px] h-6">
            <div className="absolute top-[0px] left-[33px] font-light">
              Help mint the next Atom
            </div>
            <div className="absolute h-[calc(100%_-_2px)] top-[0px] bottom-[2px] left-[0px] w-[22px]">
              <div className="absolute top-[calc(50%_-_7px)] right-[0px] bg-dimgray-100 w-[5px] h-[5px]" />
              <div className="absolute top-[0px] left-[calc(50%_+_2px)] bg-dimgray-100 w-1 h-1" />
              <div className="absolute top-[0px] right-[0px] bg-dimgray-100 w-[5px] h-1" />
              <div className="absolute top-[calc(50%_-_7px)] left-[calc(50%_+_2px)] bg-dimgray-100 w-1 h-[5px]" />
              <div className="absolute top-[calc(50%_-_7px)] left-[calc(50%_-_2px)] bg-dimgray-100 w-1 h-[5px]" />
              <div className="absolute top-[0px] left-[calc(50%_-_2px)] bg-dimgray-100 w-1 h-1" />
              <div className="absolute top-[0px] left-[calc(50%_-_7px)] bg-dimgray-100 w-[5px] h-1" />
              <div className="absolute top-[0px] left-[0px] bg-dimgray-100 w-1 h-1" />
              <div className="absolute top-[calc(50%_-_2px)] right-[0px] bg-dimgray-100 w-[5px] h-1" />
              <div className="absolute top-[calc(50%_-_2px)] left-[calc(50%_-_2px)] bg-dimgray-100 w-1 h-1" />
              <div className="absolute top-[calc(50%_+_2px)] right-[0px] bg-dimgray-100 w-[5px] h-1" />
              <div className="absolute top-[calc(50%_+_2px)] left-[calc(50%_+_2px)] bg-dimgray-100 w-1 h-1" />
              <div className="absolute bottom-[0px] left-[calc(50%_-_2px)] bg-dimgray-100 w-1 h-[5px]" />
              <div className="absolute bottom-[0px] left-[calc(50%_+_2px)] bg-dimgray-100 w-1 h-[5px]" />
              <div className="absolute right-[0px] bottom-[0px] bg-dimgray-100 w-[5px] h-[5px]" />
              <div className="absolute bottom-[0px] left-[0px] bg-dimgray-100 w-1 h-[5px]" />
              <div className="absolute top-[calc(50%_-_2px)] left-[0px] bg-dimgray-100 w-1 h-1" />
              <div className="absolute top-[calc(50%_-_2px)] left-[calc(50%_-_7px)] bg-dimgray-100 w-[5px] h-1" />
              <div className="absolute top-[calc(50%_-_2px)] left-[calc(50%_+_2px)] bg-dimgray-100 w-1 h-1" />
              <div className="absolute top-[calc(50%_+_2px)] left-[calc(50%_-_2px)] bg-dimgray-100 w-1 h-1" />
              <div className="absolute top-[calc(50%_+_2px)] left-[0px] bg-dimgray-100 w-1 h-1" />
              <div className="absolute top-[calc(50%_-_7px)] left-[0px] bg-dimgray-100 w-1 h-[5px]" />
            </div>
          </div>
          <div className="absolute top-[calc(50%_-_128.42px)] left-[0px] w-[397px] h-[69px] text-16xl text-black">
            <b className="absolute right-[-1px] bottom-[0px]">10h 14m 57s</b>
            <b className="absolute top-[0px] right-[50px] text-xl text-dimgray-100">
              Auction ends in
            </b>
            <div className="absolute h-[calc(100%_-_5px)] top-[-0.5px] bottom-[5.5px] left-[calc(50%_-_48px)] box-border w-0.5 border-r-[1px] border-solid border-firebrick-100" />
            <b className="absolute bottom-[0px] left-[0px]">Ξ 3.00</b>
            <b className="absolute top-[0px] left-[0px] text-xl text-dimgray-100">
              Current bid
            </b>
          </div>
          <div className="absolute top-[64.55px] left-[0px] text-46xl font-quinquefive">
            <span>{`ATOM `}</span>
            <span className="text-firebrick-100">#001</span>
          </div>
          <div className="absolute top-[0px] left-[0px] w-[487px] h-[45px] text-16xl text-gainsboro-200">
            <div className="absolute top-[2px] right-[-1px] font-light">
              Epoch: 342
            </div>
            <div className="absolute h-[calc(100%_+_0.97px)] top-[-1px] bottom-[0.03px] left-[calc(50%_+_25px)] box-border w-0.5 border-r-[1px] border-solid border-firebrick-100" />
            <b className="absolute top-[2px] left-[0px]">6 June 2023</b>
          </div>
        </div>
        <img
          className="absolute top-[0px] left-[229px] w-[690.9px] h-[567px]"
          alt=""
          src="/col121.svg"
        />
      </div>
      <div className="absolute top-[0px] left-[0px] bg-white w-[1920px] h-[200px] text-white">
        <div className="absolute top-[calc(50%_-_4px)] right-[230.7px] w-[647.3px] h-[37px]">
          <div className="absolute h-full top-[0px] right-[0px] bottom-[0px] w-[149px]">
            <img
              className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/path-81.svg"
            />
            <b className="absolute top-[calc(50%_-_11.5px)] right-[13.89px]">
              Connect
            </b>
            <div className="absolute top-[calc(50%_-_11.5px)] left-[15px] w-[22px] h-[23px]">
              <div className="absolute top-[0px] left-[calc(50%_+_2px)] bg-white w-1 h-1" />
              <div className="absolute top-[0px] right-[0px] bg-white w-[5px] h-1" />
              <div className="absolute top-[calc(50%_+_2.5px)] left-[calc(50%_-_2px)] bg-white w-1 h-1" />
              <div className="absolute top-[calc(50%_+_2.5px)] left-[calc(50%_-_7px)] bg-white w-[5px] h-1" />
              <div className="absolute top-[calc(50%_-_2.5px)] left-[calc(50%_-_7px)] bg-white w-[5px] h-[5px]" />
              <div className="absolute top-[0px] left-[0px] bg-white w-1 h-1" />
              <div className="absolute top-[calc(50%_-_2.5px)] right-[0px] bg-white w-[5px] h-[5px]" />
              <div className="absolute top-[calc(50%_-_2.5px)] left-[calc(50%_-_2px)] bg-white w-1 h-[5px]" />
              <div className="absolute top-[calc(50%_+_2.5px)] left-[0px] bg-white w-1 h-1" />
              <div className="absolute top-[calc(50%_+_2.5px)] left-[calc(50%_+_2px)] bg-white w-1 h-1" />
              <div className="absolute bottom-[0px] left-[calc(50%_-_7px)] bg-white w-[5px] h-[5px]" />
              <div className="absolute bottom-[0px] left-[calc(50%_-_2px)] bg-white w-1 h-[5px]" />
              <div className="absolute bottom-[0px] left-[calc(50%_+_2px)] bg-white w-1 h-[5px]" />
              <div className="absolute right-[0px] bottom-[0px] bg-white w-[5px] h-[5px]" />
              <div className="absolute bottom-[0px] left-[0px] bg-white w-1 h-[5px]" />
              <div className="absolute top-[calc(50%_-_2.5px)] left-[0px] bg-white w-1 h-[5px]" />
              <div className="absolute top-[calc(50%_-_2.5px)] left-[calc(50%_+_2px)] bg-white w-1 h-[5px]" />
            </div>
          </div>
          <div
            className="absolute h-full top-[0px] bottom-[0px] left-[calc(50%_+_21.55px)] w-[133.36px] cursor-pointer"
            onClick={onHistoryContainerClick}
          >
            <img
              className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/path-82.svg"
            />
            <b className="absolute top-[calc(50%_-_11.5px)] right-[11.25px]">
              History
            </b>
            <div className="absolute top-[calc(50%_-_11.5px)] left-[15.1px] w-[23px] h-[23px]">
              <div className="absolute top-[calc(50%_+_2.5px)] left-[calc(50%_+_2.5px)] bg-white w-1 h-1" />
              <div className="absolute top-[calc(50%_-_2.5px)] left-[calc(50%_+_2.5px)] bg-white w-1 h-[5px]" />
              <div className="absolute top-[calc(50%_+_2.5px)] right-[0px] bg-white w-[5px] h-1" />
              <div className="absolute right-[0px] bottom-[0px] bg-white w-[5px] h-[5px]" />
              <div className="absolute top-[calc(50%_-_2.5px)] right-[0px] bg-white w-[5px] h-[5px]" />
              <div className="absolute top-[calc(50%_-_2.5px)] left-[calc(50%_-_2.5px)] bg-white w-[5px] h-[5px]" />
              <div className="absolute top-[0px] left-[0px] bg-white w-1 h-1" />
              <div className="absolute top-[0px] left-[calc(50%_-_7.5px)] bg-white w-[5px] h-1" />
              <div className="absolute top-[calc(50%_-_7.5px)] left-[0px] bg-white w-1 h-[5px]" />
              <div className="absolute top-[calc(50%_-_2.5px)] left-[0px] bg-white w-1 h-[5px]" />
              <div className="absolute top-[calc(50%_-_7.5px)] left-[calc(50%_-_7.5px)] bg-white w-[5px] h-[5px]" />
              <div className="absolute top-[0px] left-[calc(50%_-_2.5px)] bg-white w-[5px] h-1" />
            </div>
          </div>
          <div className="absolute h-full top-[0px] bottom-[0px] left-[calc(50%_-_177.11px)] w-[178.66px]">
            <img
              className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/path-83.svg"
            />
            <b className="absolute top-[calc(50%_-_11.5px)] right-[8.19px]">
              Community
            </b>
            <img
              className="absolute top-[calc(50%_-_10.5px)] left-[12.46px] w-[23px] h-[23px]"
              alt=""
              src="/path-39.svg"
            />
          </div>
          <div
            className="absolute h-full top-[0px] bottom-[0px] left-[0px] w-[126.54px] cursor-pointer"
            onClick={onAtomsContainerClick}
          >
            <img
              className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/path-84.svg"
            />
            <b className="absolute top-[calc(50%_-_11.5px)] right-[11.28px]">
              Atoms
            </b>
            <img
              className="absolute top-[calc(50%_-_12.5px)] left-[15px] w-[23px] h-[23px]"
              alt=""
              src="/path-38.svg"
            />
          </div>
        </div>
        <div className="absolute top-[calc(50%_-_4px)] left-[calc(50%_-_492px)] w-[240.38px] h-[37px] text-gray">
          <img
            className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/path-1.svg"
          />
          <div className="absolute top-[calc(50%_-_11.5px)] left-[11px] uppercase">
            <span>Donations:</span>
            <span className="text-white">
              <span className="font-medium font-montserrat">{` `}</span>
              <b>Ξ 28,314</b>
            </span>
          </div>
        </div>
        <img
          className="absolute top-[calc(50%_-_16px)] left-[228px] w-[214px] h-[61px] object-cover"
          alt=""
          src="/atomslogo1@2x.png"
        />
      </div>
    </main>
  );
};

export default Homepage;
