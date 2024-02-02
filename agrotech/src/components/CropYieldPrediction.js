import React, { useState } from "react";
import "./CSS/form.css";

function CropYieldPrediction() {
    const [formData, setFormData] = useState({
        District_Name: "",
        Season: "",
        Crop: "",
        Area: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("Form Data:", formData);
    };

    return (
        <div className="d-form-container">
            <div className="d-form-text-section">
                <div className="col-xxl-8 col-xl-9 col-lg-9 col-md-7 col-sm-9">
                    <div className="card-body p-5">
                        <h1 className="fs-10 card-title fw-bold mb-5">
                            Crop Yield Prediction
                        </h1>
                        <form
                            method="POST"
                            className="needs-validation"
                            noValidate
                            autoComplete="off"
                            onSubmit={handleSubmit}
                        >

                            <div className="mb-3 d-flex">
                                <div className="mr-3 flex-grow-1">
                                    <label className="mb-2 label-large" htmlFor="Stroke">
                                        District Name <span>*</span>
                                    </label>
                                    <select
                                        id="District_Name"
                                        className="form-control custom-dropdown"
                                        name="District_Name"
                                        value={formData.District_Name}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="">Select an option</option>
                                        <option value="NICOBARS">NICOBARS</option>
                                        <option value="NORTH AND MIDDLE ANDAMAN">NORTH AND MIDDLE ANDAMAN</option>
                                        <option value="SOUTH ANDAMANS">SOUTH ANDAMANS</option>
                                        <option value="ANANTAPUR">ANANTAPUR</option>
                                        <option value="CHITTOOR">CHITTOOR</option>
                                        <option value="EAST GODAVARI">EAST GODAVARI</option>
                                        <option value="GUNTUR">GUNTUR</option>
                                        <option value="KADAPA">KADAPA</option>
                                        <option value="KRISHNA">KRISHNA</option>
                                        <option value="KURNOOL">KURNOOL</option>
                                        <option value="PRAKASAM">PRAKASAM</option>
                                        <option value="SPSR NELLORE">SPSR NELLORE</option>
                                        <option value="SRIKAKULAM">SRIKAKULAM</option>
                                        <option value="VISAKHAPATANAM">VISAKHAPATANAM</option>
                                        <option value="VIZIANAGARAM">VIZIANAGARAM</option>
                                        <option value="WEST GODAVARI">WEST GODAVARI</option>
                                        <option value="ANJAW">ANJAW</option>
                                        <option value="CHANGLANG">CHANGLANG</option>
                                        <option value="DIBANG VALLEY">DIBANG VALLEY</option>
                                        <option value="EAST KAMENG">EAST KAMENG</option>
                                        <option value="EAST SIANG">EAST SIANG</option>
                                        <option value="KURUNG KUMEY">KURUNG KUMEY</option>
                                        <option value="LOHIT">LOHIT</option>
                                        <option value="LONGDING">LONGDING</option>
                                        <option value="LOWER DIBANG VALLEY">LOWER DIBANG VALLEY</option>
                                        <option value="LOWER SUBANSIRI">LOWER SUBANSIRI</option>
                                        <option value="NAMSAI">NAMSAI</option>
                                        <option value="PAPUM PARE">PAPUM PARE</option>
                                        <option value="TAWANG">TAWANG</option>
                                        <option value="TIRAP">TIRAP</option>
                                        <option value="UPPER SIANG">UPPER SIANG</option>
                                        <option value="UPPER SUBANSIRI">UPPER SUBANSIRI</option>
                                        <option value="WEST KAMENG">WEST KAMENG</option>
                                        <option value="WEST SIANG">WEST SIANG</option>
                                        <option value="BAKSA">BAKSA</option>
                                        <option value="BARPETA">BARPETA</option>
                                        <option value="BONGAIGAON">BONGAIGAON</option>
                                        <option value="CACHAR">CACHAR</option>
                                        <option value="CHIRANG">CHIRANG</option>
                                        <option value="DARRANG">DARRANG</option>
                                        <option value="DHEMAJI">DHEMAJI</option>
                                        <option value="DHUBRI">DHUBRI</option>
                                        <option value="DIBRUGARH">DIBRUGARH</option>
                                        <option value="DIMA HASAO">DIMA HASAO</option>
                                        <option value="GOALPARA">GOALPARA</option>
                                        <option value="GOLAGHAT">GOLAGHAT</option>
                                        <option value="HAILAKANDI">HAILAKANDI</option>
                                        <option value="JORHAT">JORHAT</option>
                                        <option value="KAMRUP">KAMRUP</option>
                                        <option value="KAMRUP METRO">KAMRUP METRO</option>
                                        <option value="KARBI ANGLONG">KARBI ANGLONG</option>
                                        <option value="KARIMGANJ">KARIMGANJ</option>
                                        <option value="KOKRAJHAR">KOKRAJHAR</option>
                                        <option value="LAKHIMPUR">LAKHIMPUR</option>
                                        <option value="MARIGAON">MARIGAON</option>
                                        <option value="NAGAON">NAGAON</option>
                                        <option value="NALBARI">NALBARI</option>
                                        <option value="SIVASAGAR">SIVASAGAR</option>
                                        <option value="SONITPUR">SONITPUR</option>
                                        <option value="TINSUKIA">TINSUKIA</option>
                                        <option value="UDALGURI">UDALGURI</option>
                                        <option value="ARARIA">ARARIA</option>
                                        <option value="ARWAL">ARWAL</option>
                                        <option value="AURANGABAD">AURANGABAD</option>
                                        <option value="BANKA">BANKA</option>
                                        <option value="BEGUSARAI">BEGUSARAI</option>
                                        <option value="BHAGALPUR">BHAGALPUR</option>
                                        <option value="BHOJPUR">BHOJPUR</option>
                                        <option value="BUXAR">BUXAR</option>
                                        <option value="DARBHANGA">DARBHANGA</option>
                                        <option value="GAYA">GAYA</option>
                                        <option value="GOPALGANJ">GOPALGANJ</option>
                                        <option value="JAMUI">JAMUI</option>
                                        <option value="JEHANABAD">JEHANABAD</option>
                                        <option value="KAIMUR (BHABUA)">KAIMUR (BHABUA)</option>
                                        <option value="KATIHAR">KATIHAR</option>
                                        <option value="KHAGARIA">KHAGARIA</option>
                                        <option value="KISHANGANJ">KISHANGANJ</option>
                                        <option value="LAKHISARAI">LAKHISARAI</option>
                                        <option value="MADHEPURA">MADHEPURA</option>
                                        <option value="MADHUBANI">MADHUBANI</option>
                                        <option value="MUNGER">MUNGER</option>
                                        <option value="MUZAFFARPUR">MUZAFFARPUR</option>
                                        <option value="NALANDA">NALANDA</option>
                                        <option value="NAWADA">NAWADA</option>
                                        <option value="PASHCHIM CHAMPARAN">PASHCHIM CHAMPARAN</option>
                                        <option value="PATNA">PATNA</option>
                                        <option value="PURBI CHAMPARAN">PURBI CHAMPARAN</option>
                                        <option value="PURNIA">PURNIA</option>
                                        <option value="ROHTAS">ROHTAS</option>
                                        <option value="SAHARSA">SAHARSA</option>
                                        <option value="SAMASTIPUR">SAMASTIPUR</option>
                                        <option value="SARAN">SARAN</option>
                                        <option value="SHEIKHPURA">SHEIKHPURA</option>
                                        <option value="SHEOHAR">SHEOHAR</option>
                                        <option value="SITAMARHI">SITAMARHI</option>
                                        <option value="SIWAN">SIWAN</option>
                                        <option value="SUPAUL">SUPAUL</option>
                                        <option value="VAISHALI">VAISHALI</option>
                                        <option value="CHANDIGARH">CHANDIGARH</option>
                                        <option value="BALOD">BALOD</option>
                                        <option value="BALODA BAZAR">BALODA BAZAR</option>
                                        <option value="BALRAMPUR">BALRAMPUR</option>
                                        <option value="BASTAR">BASTAR</option>
                                        <option value="BEMETARA">BEMETARA</option>
                                        <option value="BIJAPUR">BIJAPUR</option>
                                        <option value="BILASPUR">BILASPUR</option>
                                        <option value="DANTEWADA">DANTEWADA</option>
                                        <option value="DHAMTARI">DHAMTARI</option>
                                        <option value="DURG">DURG</option>
                                        <option value="GARIYABAND">GARIYABAND</option>
                                        <option value="JANJGIR-CHAMPA">JANJGIR-CHAMPA</option>
                                        <option value="JASHPUR">JASHPUR</option>
                                        <option value="KABIRDHAM">KABIRDHAM</option>
                                        <option value="KANKER">KANKER</option>
                                        <option value="KONDAGAON">KONDAGAON</option>
                                        <option value="KORBA">KORBA</option>
                                        <option value="KOREA">KOREA</option>
                                        <option value="MAHASAMUND">MAHASAMUND</option>
                                        <option value="MUNGELI">MUNGELI</option>
                                        <option value="NARAYANPUR">NARAYANPUR</option>
                                        <option value="RAIGARH">RAIGARH</option>
                                        <option value="RAIPUR">RAIPUR</option>
                                        <option value="RAJNANDGAON">RAJNANDGAON</option>
                                        <option value="SUKMA">SUKMA</option>
                                        <option value="SURAJPUR">SURAJPUR</option>
                                        <option value="SURGUJA">SURGUJA</option>
                                        <option value="DADRA AND NAGAR HAVELI">DADRA AND NAGAR HAVELI</option>
                                        <option value="NORTH GOA">NORTH GOA</option>
                                        <option value="SOUTH GOA">SOUTH GOA</option>
                                        <option value="AHMADABAD">AHMADABAD</option>
                                        <option value="AMRELI">AMRELI</option>
                                        <option value="ANAND">ANAND</option>
                                        <option value="BANAS KANTHA">BANAS KANTHA</option>
                                        <option value="BHARUCH">BHARUCH</option>
                                        <option value="BHAVNAGAR">BHAVNAGAR</option>
                                        <option value="DANG">DANG</option>
                                        <option value="DOHAD">DOHAD</option>
                                        <option value="GANDHINAGAR">GANDHINAGAR</option>
                                        <option value="JAMNAGAR">JAMNAGAR</option>
                                        <option value="JUNAGADH">JUNAGADH</option>
                                        <option value="KACHCHH">KACHCHH</option>
                                        <option value="KHEDA">KHEDA</option>
                                        <option value="MAHESANA">MAHESANA</option>
                                        <option value="NARMADA">NARMADA</option>
                                        <option value="NAVSARI">NAVSARI</option>
                                        <option value="PANCH MAHALS">PANCH MAHALS</option>
                                        <option value="PATAN">PATAN</option>
                                        <option value="PORBANDAR">PORBANDAR</option>
                                        <option value="RAJKOT">RAJKOT</option>
                                        <option value="SABAR KANTHA">SABAR KANTHA</option>
                                        <option value="SURAT">SURAT</option>
                                        <option value="SURENDRANAGAR">SURENDRANAGAR</option>
                                        <option value="TAPI">TAPI</option>
                                        <option value="VADODARA">VADODARA</option>
                                        <option value="VALSAD">VALSAD</option>
                                        <option value="AMBALA">AMBALA</option>
                                        <option value="BHIWANI">BHIWANI</option>
                                        <option value="FARIDABAD">FARIDABAD</option>
                                        <option value="FATEHABAD">FATEHABAD</option>
                                        <option value="GURGAON">GURGAON</option>
                                        <option value="HISAR">HISAR</option>
                                        <option value="JHAJJAR">JHAJJAR</option>
                                        <option value="JIND">JIND</option>
                                        <option value="KAITHAL">KAITHAL</option>
                                        <option value="KARNAL">KARNAL</option>
                                        <option value="KURUKSHETRA">KURUKSHETRA</option>
                                        <option value="MAHENDRAGARH">MAHENDRAGARH</option>
                                        <option value="MEWAT">MEWAT</option>
                                        <option value="PALWAL">PALWAL</option>
                                        <option value="PANCHKULA">PANCHKULA</option>
                                        <option value="PANIPAT">PANIPAT</option>
                                        <option value="REWARI">REWARI</option>
                                        <option value="ROHTAK">ROHTAK</option>
                                        <option value="SIRSA">SIRSA</option>
                                        <option value="SONIPAT">SONIPAT</option>
                                        <option value="YAMUNANAGAR">YAMUNANAGAR</option>
                                        <option value="CHAMBA">CHAMBA</option>
                                        <option value="HAMIRPUR">HAMIRPUR</option>
                                        <option value="KANGRA">KANGRA</option>
                                        <option value="KINNAUR">KINNAUR</option>
                                        <option value="KULLU">KULLU</option>
                                        <option value="LAHUL AND SPITI">LAHUL AND SPITI</option>
                                        <option value="MANDI">MANDI</option>
                                        <option value="SHIMLA">SHIMLA</option>
                                        <option value="SIRMAUR">SIRMAUR</option>
                                        <option value="SOLAN">SOLAN</option>
                                        <option value="UNA">UNA</option>
                                        <option value="ANANTNAG">ANANTNAG</option>
                                        <option value="BADGAM">BADGAM</option>
                                        <option value="BANDIPORA">BANDIPORA</option>
                                        <option value="BARAMULLA">BARAMULLA</option>
                                        <option value="DODA">DODA</option>
                                        <option value="GANDERBAL">GANDERBAL</option>
                                        <option value="JAMMU">JAMMU</option>
                                        <option value="KARGIL">KARGIL</option>
                                        <option value="KATHUA">KATHUA</option>
                                        <option value="KISHTWAR">KISHTWAR</option>
                                        <option value="KULGAM">KULGAM</option>
                                        <option value="KUPWARA">KUPWARA</option>
                                        <option value="LEH LADAKH">LEH LADAKH</option>
                                        <option value="POONCH">POONCH </option>
                                        <option value="PULWAMA">PULWAMA</option>
                                        <option value="RAJAURI">RAJAURI</option>
                                        <option value="RAMBAN">RAMBAN</option>
                                        <option value="REASI">REASI</option>
                                        <option value="SAMBA">SAMBA</option>
                                        <option value="SHOPIAN">SHOPIAN</option>
                                        <option value="SRINAGAR">SRINAGAR</option>
                                        <option value="UDHAMPUR">UDHAMPUR</option>
                                        <option value="BOKARO">BOKARO</option>
                                        <option value="CHATRA">CHATRA</option>
                                        <option value="DEOGHAR">DEOGHAR</option>
                                        <option value="DHANBAD">DHANBAD</option>
                                        <option value="DUMKA">DUMKA</option>
                                        <option value="EAST SINGHBUM">EAST SINGHBUM</option>
                                        <option value="GARHWA">GARHWA</option>
                                        <option value="GIRIDIH">GIRIDIH</option>
                                        <option value="GODDA">GODDA</option>
                                        <option value="GUMLA">GUMLA</option>
                                        <option value="HAZARIBAGH">HAZARIBAGH</option>
                                        <option value="JAMTARA">JAMTARA</option>
                                        <option value="KHUNTI">KHUNTI</option>
                                        <option value="KODERMA">KODERMA</option>
                                        <option value="LATEHAR">LATEHAR</option>
                                        <option value="LOHARDAGA">LOHARDAGA</option>
                                        <option value="PAKUR">PAKUR</option>
                                        <option value="PALAMU">PALAMU</option>
                                        <option value="RAMGARH">RAMGARH</option>
                                        <option value="RANCHI">RANCHI</option>
                                        <option value="SAHEBGANJ">SAHEBGANJ</option>
                                        <option value="SARAIKELA KHARSAWAN">SARAIKELA KHARSAWAN</option>
                                        <option value="SIMDEGA">SIMDEGA</option>
                                        <option value="WEST SINGHBHUM">WEST SINGHBHUM</option>
                                        <option value="BAGALKOT">BAGALKOT</option>
                                        <option value="BANGALORE RURAL">BANGALORE RURAL</option>
                                        <option value="BELGAUM">BELGAUM</option>
                                        <option value="BELLARY">BELLARY</option>
                                        <option value="BENGALURU URBAN">BENGALURU URBAN</option>
                                        <option value="BIDAR">BIDAR</option>
                                        <option value="CHAMARAJANAGAR">CHAMARAJANAGAR</option>
                                        <option value="CHIKBALLAPUR">CHIKBALLAPUR</option>
                                        <option value="CHIKMAGALUR">CHIKMAGALUR</option>
                                        <option value="CHITRADURGA">CHITRADURGA</option>
                                        <option value="DAKSHIN KANNAD">DAKSHIN KANNAD</option>
                                        <option value="DAVANGERE">DAVANGERE</option>
                                        <option value="DHARWAD">DHARWAD</option>
                                        <option value="GADAG">GADAG</option>
                                        <option value="GULBARGA">GULBARGA</option>
                                        <option value="HASSAN">HASSAN</option>
                                        <option value="HAVERI">HAVERI</option>
                                        <option value="KODAGU">KODAGU</option>
                                        <option value="KOLAR">KOLAR</option>
                                        <option value="KOPPAL">KOPPAL</option>
                                        <option value="MANDYA">MANDYA</option>
                                        <option value="MYSORE">MYSORE</option>
                                        <option value="RAICHUR">RAICHUR</option>
                                        <option value="RAMANAGARA">RAMANAGARA</option>
                                        <option value="SHIMOGA">SHIMOGA</option>
                                        <option value="TUMKUR">TUMKUR</option>
                                        <option value="UDUPI">UDUPI</option>
                                        <option value="UTTAR KANNAD">UTTAR KANNAD</option>
                                        <option value="YADGIR">YADGIR</option>
                                        <option value="ALAPPUZHA">ALAPPUZHA</option>
                                        <option value="ERNAKULAM">ERNAKULAM</option>
                                        <option value="IDUKKI">IDUKKI</option>
                                        <option value="KANNUR">KANNUR</option>
                                        <option value="KASARAGOD">KASARAGOD</option>
                                        <option value="KOLLAM">KOLLAM</option>
                                        <option value="KOTTAYAM">KOTTAYAM</option>
                                        <option value="KOZHIKODE">KOZHIKODE</option>
                                        <option value="MALAPPURAM">MALAPPURAM</option>
                                        <option value="PALAKKAD">PALAKKAD</option>
                                        <option value="PATHANAMTHITTA">PATHANAMTHITTA</option>
                                        <option value="THIRUVANANTHAPURAM">THIRUVANANTHAPURAM</option>
                                        <option value="THRISSUR">THRISSUR</option>
                                        <option value="WAYANAD">WAYANAD</option>
                                        <option value="AGAR MALWA">AGAR MALWA</option>
                                        <option value="ALIRAJPUR">ALIRAJPUR</option>
                                        <option value="ANUPPUR">ANUPPUR</option>
                                        <option value="ASHOKNAGAR">ASHOKNAGAR</option>
                                        <option value="BALAGHAT">BALAGHAT</option>
                                        <option value="BARWANI">BARWANI</option>
                                        <option value="BETUL">BETUL</option>
                                        <option value="BHIND">BHIND</option>
                                        <option value="BHOPAL">BHOPAL</option>
                                        <option value="BURHANPUR">BURHANPUR</option>
                                        <option value="CHHATARPUR">CHHATARPUR</option>
                                        <option value="CHHINDWARA">CHHINDWARA</option>
                                        <option value="DAMOH">DAMOH</option>
                                        <option value="DATIA">DATIA</option>
                                        <option value="DEWAS">DEWAS</option>
                                        <option value="DHAR">DHAR</option>
                                        <option value="DINDORI">DINDORI</option>
                                        <option value="GUNA">GUNA</option>
                                        <option value="GWALIOR">GWALIOR</option>
                                        <option value="HARDA">HARDA</option>
                                        <option value="HOSHANGABAD">HOSHANGABAD</option>
                                        <option value="INDORE">INDORE</option>
                                        <option value="JABALPUR">JABALPUR</option>
                                        <option value="JHABUA">JHABUA</option>
                                        <option value="KATNI">KATNI</option>
                                        <option value="KHANDWA">KHANDWA</option>
                                        <option value="KHARGONE">KHARGONE</option>
                                        <option value="MANDLA">MANDLA</option>
                                        <option value="MANDSAUR">MANDSAUR</option>
                                        <option value="MORENA">MORENA</option>
                                        <option value="NARSINGHPUR">NARSINGHPUR</option>
                                        <option value="NEEMUCH">NEEMUCH</option>
                                        <option value="PANNA">PANNA</option>
                                        <option value="RAISEN">RAISEN</option>
                                        <option value="RAJGARH">RAJGARH</option>
                                        <option value="RATLAM">RATLAM</option>
                                        <option value="REWA">REWA</option>
                                        <option value="SAGAR">SAGAR</option>
                                        <option value="SATNA">SATNA</option>
                                        <option value="SEHORE">SEHORE</option>
                                        <option value="SEONI">SEONI</option>
                                        <option value="SHAHDOL">SHAHDOL</option>
                                        <option value="SHAJAPUR">SHAJAPUR</option>
                                        <option value="SHEOPUR">SHEOPUR</option>
                                        <option value="SHIVPURI">SHIVPURI</option>
                                        <option value="SIDHI">SIDHI</option>
                                        <option value="SINGRAULI">SINGRAULI</option>
                                        <option value="TIKAMGARH">TIKAMGARH</option>
                                        <option value="UJJAIN">UJJAIN</option>
                                        <option value="UMARIA">UMARIA</option>
                                        <option value="VIDISHA">VIDISHA</option>
                                        <option value="AHMEDNAGAR">AHMEDNAGAR</option>
                                        <option value="AKOLA">AKOLA</option>
                                        <option value="AMRAVATI">AMRAVATI</option>
                                        <option value="BEED">BEED</option>
                                        <option value="BHANDARA">BHANDARA</option>
                                        <option value="BULDHANA">BULDHANA</option>
                                        <option value="CHANDRAPUR">CHANDRAPUR</option>
                                        <option value="DHULE">DHULE</option>
                                        <option value="GADCHIROLI">GADCHIROLI</option>
                                        <option value="GONDIA">GONDIA</option>
                                        <option value="HINGOLI">HINGOLI</option>
                                        <option value="JALGAON">JALGAON</option>
                                        <option value="JALNA">JALNA</option>
                                        <option value="KOLHAPUR">KOLHAPUR</option>
                                        <option value="LATUR">LATUR</option>
                                        <option value="MUMBAI">MUMBAI</option>
                                        <option value="NAGPUR">NAGPUR</option>
                                        <option value="NANDED">NANDED</option>
                                        <option value="NANDURBAR">NANDURBAR</option>
                                        <option value="NASHIK">NASHIK</option>
                                        <option value="OSMANABAD">OSMANABAD</option>
                                        <option value="PALGHAR">PALGHAR</option>
                                        <option value="PARBHANI">PARBHANI</option>
                                        <option value="PUNE">PUNE</option>
                                        <option value="RAIGAD">RAIGAD</option>
                                        <option value="RATNAGIRI">RATNAGIRI</option>
                                        <option value="SANGLI">SANGLI</option>
                                        <option value="SATARA">SATARA</option>
                                        <option value="SINDHUDURG">SINDHUDURG</option>
                                        <option value="SOLAPUR">SOLAPUR</option>
                                        <option value="THANE">THANE</option>
                                        <option value="WARDHA">WARDHA</option>
                                        <option value="WASHIM">WASHIM</option>
                                        <option value="YAVATMAL">YAVATMAL</option>
                                        <option value="BISHNUPUR">BISHNUPUR</option>
                                        <option value="CHANDEL">CHANDEL</option>
                                        <option value="CHURACHANDPUR">CHURACHANDPUR</option>
                                        <option value="IMPHAL EAST">IMPHAL EAST</option>
                                        <option value="IMPHAL WEST">IMPHAL WEST</option>
                                        <option value="SENAPATI">SENAPATI</option>
                                        <option value="TAMENGLONG">TAMENGLONG</option>
                                        <option value="THOUBAL">THOUBAL</option>
                                        <option value="UKHRUL">UKHRUL</option>
                                        <option value="EAST GARO HILLS">EAST GARO HILLS</option>
                                        <option value="EAST JAINTIA HILLS">EAST JAINTIA HILLS</option>
                                        <option value="EAST KHASI HILLS">EAST KHASI HILLS</option>
                                        <option value="NORTH GARO HILLS">NORTH GARO HILLS</option>
                                        <option value="RI BHOI">RI BHOI</option>
                                        <option value="SOUTH GARO HILLS">SOUTH GARO HILLS</option>
                                        <option value="SOUTH WEST GARO HILLS">SOUTH WEST GARO HILLS</option>
                                        <option value="SOUTH WEST KHASI HILLS">SOUTH WEST KHASI HILLS</option>
                                        <option value="WEST GARO HILLS">WEST GARO HILLS</option>
                                        <option value="WEST JAINTIA HILLS">WEST JAINTIA HILLS</option>
                                        <option value="WEST KHASI HILLS">WEST KHASI HILLS</option>
                                        <option value="AIZAWL">AIZAWL</option>
                                        <option value="CHAMPHAI">CHAMPHAI</option>
                                        <option value="KOLASIB">KOLASIB</option>
                                        <option value="LAWNGTLAI">LAWNGTLAI</option>
                                        <option value="LUNGLEI">LUNGLEI</option>
                                        <option value="MAMIT">MAMIT</option>
                                        <option value="SAIHA">SAIHA</option>
                                        <option value="SERCHHIP">SERCHHIP</option>
                                        <option value="DIMAPUR">DIMAPUR</option>
                                        <option value="KIPHIRE">KIPHIRE</option>
                                        <option value="KOHIMA">KOHIMA</option>
                                        <option value="LONGLENG">LONGLENG</option>
                                        <option value="MOKOKCHUNG">MOKOKCHUNG</option>
                                        <option value="MON">MON</option>
                                        <option value="PEREN">PEREN</option>
                                        <option value="PHEK">PHEK</option>
                                        <option value="TUENSANG">TUENSANG</option>
                                        <option value="WOKHA">WOKHA</option>
                                        <option value="ZUNHEBOTO">ZUNHEBOTO</option>
                                        <option value="ANUGUL">ANUGUL</option>
                                        <option value="BALANGIR">BALANGIR</option>
                                        <option value="BALESHWAR">BALESHWAR</option>
                                        <option value="BARGARH">BARGARH</option>
                                        <option value="BHADRAK">BHADRAK</option>
                                        <option value="BOUDH">BOUDH</option>
                                        <option value="CUTTACK">CUTTACK</option>
                                        <option value="DEOGARH">DEOGARH</option>
                                        <option value="DHENKANAL">DHENKANAL</option>
                                        <option value="GAJAPATI">GAJAPATI</option>
                                        <option value="GANJAM">GANJAM</option>
                                        <option value="JAGATSINGHAPUR">JAGATSINGHAPUR</option>
                                        <option value="JAJAPUR">JAJAPUR</option>
                                        <option value="JHARSUGUDA">JHARSUGUDA</option>
                                        <option value="KALAHANDI">KALAHANDI</option>
                                        <option value="KANDHAMAL">KANDHAMAL</option>
                                        <option value="KENDRAPARA">KENDRAPARA</option>
                                        <option value="KENDUJHAR">KENDUJHAR</option>
                                        <option value="KHORDHA">KHORDHA</option>
                                        <option value="KORAPUT">KORAPUT</option>
                                        <option value="MALKANGIRI">MALKANGIRI</option>
                                        <option value="MAYURBHANJ">MAYURBHANJ</option>
                                        <option value="NABARANGPUR">NABARANGPUR</option>
                                        <option value="NAYAGARH">NAYAGARH</option>
                                        <option value="NUAPADA">NUAPADA</option>
                                        <option value="PURI">PURI</option>
                                        <option value="RAYAGADA">RAYAGADA</option>
                                        <option value="SAMBALPUR">SAMBALPUR</option>
                                        <option value="SONEPUR">SONEPUR</option>
                                        <option value="SUNDARGARH">SUNDARGARH</option>
                                        <option value="KARAIKAL">KARAIKAL</option>
                                        <option value="MAHE">MAHE</option>
                                        <option value="PONDICHERRY">PONDICHERRY</option>
                                        <option value="YANAM">YANAM</option>
                                        <option value="AMRITSAR">AMRITSAR</option>
                                        <option value="BARNALA">BARNALA</option>
                                        <option value="BATHINDA">BATHINDA</option>
                                        <option value="FARIDKOT">FARIDKOT</option>
                                        <option value="FATEHGARH SAHIB">FATEHGARH SAHIB</option>
                                        <option value="FAZILKA">FAZILKA</option>
                                        <option value="FIROZEPUR">FIROZEPUR</option>
                                        <option value="GURDASPUR">GURDASPUR</option>
                                        <option value="HOSHIARPUR">HOSHIARPUR</option>
                                        <option value="JALANDHAR">JALANDHAR</option>
                                        <option value="KAPURTHALA">KAPURTHALA</option>
                                        <option value="LUDHIANA">LUDHIANA</option>
                                        <option value="MANSA">MANSA</option>
                                        <option value="MOGA">MOGA</option>
                                        <option value="MUKTSAR">MUKTSAR</option>
                                        <option value="NAWANSHAHR">NAWANSHAHR</option>
                                        <option value="PATHANKOT">PATHANKOT</option>
                                        <option value="PATIALA">PATIALA</option>
                                        <option value="RUPNAGAR">RUPNAGAR</option>
                                        <option value="S.A.S NAGAR">S.A.S NAGAR</option>
                                        <option value="SANGRUR">SANGRUR</option>
                                        <option value="TARN TARAN">TARN TARAN</option>
                                        <option value="AJMER">AJMER</option>
                                        <option value="ALWAR">ALWAR</option>
                                        <option value="BANSWARA">BANSWARA</option>
                                        <option value="BARAN">BARAN</option>
                                        <option value="BARMER">BARMER</option>
                                        <option value="BHARATPUR">BHARATPUR</option>
                                        <option value="BHILWARA">BHILWARA</option>
                                        <option value="BIKANER">BIKANER</option>
                                        <option value="BUNDI">BUNDI</option>
                                        <option value="CHITTORGARH">CHITTORGARH</option>
                                        <option value="CHURU">CHURU</option>
                                        <option value="DAUSA">DAUSA</option>
                                        <option value="DHOLPUR">DHOLPUR</option>
                                        <option value="DUNGARPUR">DUNGARPUR</option>
                                        <option value="GANGANAGAR">GANGANAGAR</option>
                                        <option value="HANUMANGARH">HANUMANGARH</option>
                                        <option value="JAIPUR">JAIPUR</option>
                                        <option value="JAISALMER">JAISALMER</option>
                                        <option value="JALORE">JALORE</option>
                                        <option value="JHALAWAR">JHALAWAR</option>
                                        <option value="JHUNJHUNU">JHUNJHUNU</option>
                                        <option value="JODHPUR">JODHPUR</option>
                                        <option value="KARAULI">KARAULI</option>
                                        <option value="KOTA">KOTA</option>
                                        <option value="NAGAUR">NAGAUR</option>
                                        <option value="PALI">PALI</option>
                                        <option value="PRATAPGARH">PRATAPGARH</option>
                                        <option value="RAJSAMAND">RAJSAMAND</option>
                                        <option value="SAWAI MADHOPUR">SAWAI MADHOPUR</option>
                                        <option value="SIKAR">SIKAR</option>
                                        <option value="SIROHI">SIROHI</option>
                                        <option value="TONK">TONK</option>
                                        <option value="UDAIPUR">UDAIPUR</option>
                                        <option value="EAST DISTRICT">EAST DISTRICT</option>
                                        <option value="NORTH DISTRICT">NORTH DISTRICT</option>
                                        <option value="SOUTH DISTRICT">SOUTH DISTRICT</option>
                                        <option value="WEST DISTRICT">WEST DISTRICT</option>
                                        <option value="ARIYALUR">ARIYALUR</option>
                                        <option value="COIMBATORE">COIMBATORE</option>
                                        <option value="CUDDALORE">CUDDALORE</option>
                                        <option value="DHARMAPURI">DHARMAPURI</option>
                                        <option value="DINDIGUL">DINDIGUL</option>
                                        <option value="ERODE">ERODE</option>
                                        <option value="KANCHIPURAM">KANCHIPURAM</option>
                                        <option value="KANNIYAKUMARI">KANNIYAKUMARI</option>
                                        <option value="KARUR">KARUR</option>
                                        <option value="KRISHNAGIRI">KRISHNAGIRI</option>
                                        <option value="MADURAI">MADURAI</option>
                                        <option value="NAGAPATTINAM">NAGAPATTINAM</option>
                                        <option value="NAMAKKAL">NAMAKKAL</option>
                                        <option value="PERAMBALUR">PERAMBALUR</option>
                                        <option value="PUDUKKOTTAI">PUDUKKOTTAI</option>
                                        <option value="RAMANATHAPURAM">RAMANATHAPURAM</option>
                                        <option value="SALEM">SALEM</option>
                                        <option value="SIVAGANGA">SIVAGANGA</option>
                                        <option value="THANJAVUR">THANJAVUR</option>
                                        <option value="THE NILGIRIS">THE NILGIRIS</option>
                                        <option value="THENI">THENI</option>
                                        <option value="THIRUVALLUR">THIRUVALLUR</option>
                                        <option value="THIRUVARUR">THIRUVARUR</option>
                                        <option value="TIRUCHIRAPPALLI">TIRUCHIRAPPALLI</option>
                                        <option value="TIRUNELVELI">TIRUNELVELI</option>
                                        <option value="TIRUPPUR">TIRUPPUR</option>
                                        <option value="TIRUVANNAMALAI">TIRUVANNAMALAI</option>
                                        <option value="TUTICORIN">TUTICORIN</option>
                                        <option value="VELLORE">VELLORE</option>
                                        <option value="VILLUPURAM">VILLUPURAM</option>
                                        <option value="VIRUDHUNAGAR">VIRUDHUNAGAR</option>
                                        <option value="ADILABAD">ADILABAD</option>
                                        <option value="HYDERABAD">HYDERABAD</option>
                                        <option value="KARIMNAGAR">KARIMNAGAR</option>
                                        <option value="KHAMMAM">KHAMMAM</option>
                                        <option value="MAHBUBNAGAR">MAHBUBNAGAR</option>
                                        <option value="MEDAK">MEDAK</option>
                                        <option value="NALGONDA">NALGONDA</option>
                                        <option value="NIZAMABAD">NIZAMABAD</option>
                                        <option value="RANGAREDDI">RANGAREDDI</option>
                                        <option value="WARANGAL">WARANGAL</option>
                                        <option value="DHALAI">DHALAI</option>
                                        <option value="GOMATI">GOMATI</option>
                                        <option value="KHOWAI">KHOWAI</option>
                                        <option value="NORTH TRIPURA">NORTH TRIPURA</option>
                                        <option value="SEPAHIJALA">SEPAHIJALA</option>
                                        <option value="SOUTH TRIPURA">SOUTH TRIPURA</option>
                                        <option value="UNAKOTI">UNAKOTI</option>
                                        <option value="WEST TRIPURA">WEST TRIPURA</option>
                                        <option value="AGRA">AGRA</option>
                                        <option value="ALIGARH">ALIGARH</option>
                                        <option value="ALLAHABAD">ALLAHABAD</option>
                                        <option value="AMBEDKAR NAGAR">AMBEDKAR NAGAR</option>
                                        <option value="AMETHI">AMETHI</option>
                                        <option value="AMROHA">AMROHA</option>
                                        <option value="AURAIYA">AURAIYA</option>
                                        <option value="AZAMGARH">AZAMGARH</option>
                                        <option value="BAGHPAT">BAGHPAT</option>
                                        <option value="BAHRAICH">BAHRAICH</option>
                                        <option value="BALLIA">BALLIA</option>
                                        <option value="BANDA">BANDA</option>
                                        <option value="BARABANKI">BARABANKI</option>
                                        <option value="BAREILLY">BAREILLY</option>
                                        <option value="BASTI">BASTI</option>
                                        <option value="BIJNOR">BIJNOR</option>
                                        <option value="BUDAUN">BUDAUN</option>
                                        <option value="BULANDSHAHR">BULANDSHAHR</option>
                                        <option value="CHANDAULI">CHANDAULI</option>
                                        <option value="CHITRAKOOT">CHITRAKOOT</option>
                                        <option value="DEORIA">DEORIA</option>
                                        <option value="ETAH">ETAH</option>
                                        <option value="ETAWAH">ETAWAH</option>
                                        <option value="FAIZABAD">FAIZABAD</option>
                                        <option value="FARRUKHABAD">FARRUKHABAD</option>
                                        <option value="FATEHPUR">FATEHPUR</option>
                                        <option value="FIROZABAD">FIROZABAD</option>
                                        <option value="GAUTAM BUDDHA NAGAR">GAUTAM BUDDHA NAGAR</option>
                                        <option value="GHAZIABAD">GHAZIABAD</option>
                                        <option value="GHAZIPUR">GHAZIPUR</option>
                                        <option value="GONDA">GONDA</option>
                                        <option value="GORAKHPUR">GORAKHPUR</option>
                                        <option value="HAPUR">HAPUR</option>
                                        <option value="HARDOI">HARDOI</option>
                                        <option value="HATHRAS">HATHRAS</option>
                                        <option value="JALAUN">JALAUN</option>
                                        <option value="JAUNPUR">JAUNPUR</option>
                                        <option value="JHANSI">JHANSI</option>
                                        <option value="KANNAUJ">KANNAUJ</option>
                                        <option value="KANPUR DEHAT">KANPUR DEHAT</option>
                                        <option value="KANPUR NAGAR">KANPUR NAGAR</option>
                                        <option value="KASGANJ">KASGANJ</option>
                                        <option value="KAUSHAMBI">KAUSHAMBI</option>
                                        <option value="KHERI">KHERI</option>
                                        <option value="KUSHI NAGAR">KUSHI NAGAR</option>
                                        <option value="LALITPUR">LALITPUR</option>
                                        <option value="LUCKNOW">LUCKNOW</option>
                                        <option value="MAHARAJGANJ">MAHARAJGANJ</option>
                                        <option value="MAHOBA">MAHOBA</option>
                                        <option value="MAINPURI">MAINPURI</option>
                                        <option value="MATHURA">MATHURA</option>
                                        <option value="MAU">MAU</option>
                                        <option value="MEERUT">MEERUT</option>
                                        <option value="MIRZAPUR">MIRZAPUR</option>
                                        <option value="MORADABAD">MORADABAD</option>
                                        <option value="MUZAFFARNAGAR">MUZAFFARNAGAR</option>
                                        <option value="PILIBHIT">PILIBHIT</option>
                                        <option value="RAE BARELI">RAE BARELI</option>
                                        <option value="RAMPUR">RAMPUR</option>
                                        <option value="SAHARANPUR">SAHARANPUR</option>
                                        <option value="SAMBHAL">SAMBHAL</option>
                                        <option value="SANT KABEER NAGAR">SANT KABEER NAGAR</option>
                                        <option value="SANT RAVIDAS NAGAR">SANT RAVIDAS NAGAR</option>
                                        <option value="SHAHJAHANPUR">SHAHJAHANPUR</option>
                                        <option value="SHAMLI">SHAMLI</option>
                                        <option value="SHRAVASTI">SHRAVASTI</option>
                                        <option value="SIDDHARTH NAGAR">SIDDHARTH NAGAR</option>
                                        <option value="SITAPUR">SITAPUR</option>
                                        <option value="SONBHADRA">SONBHADRA</option>
                                        <option value="SULTANPUR">SULTANPUR</option>
                                        <option value="UNNAO">UNNAO</option>
                                        <option value="VARANASI">VARANASI</option>
                                        <option value="ALMORA">ALMORA</option>
                                        <option value="BAGESHWAR">BAGESHWAR</option>
                                        <option value="CHAMOLI">CHAMOLI</option>
                                        <option value="CHAMPAWAT">CHAMPAWAT</option>
                                        <option value="DEHRADUN">DEHRADUN</option>
                                        <option value="HARIDWAR">HARIDWAR</option>
                                        <option value="NAINITAL">NAINITAL</option>
                                        <option value="PAURI GARHWAL">PAURI GARHWAL</option>
                                        <option value="PITHORAGARH">PITHORAGARH</option>
                                        <option value="RUDRA PRAYAG">RUDRA PRAYAG</option>
                                        <option value="TEHRI GARHWAL">TEHRI GARHWAL</option>
                                        <option value="UDAM SINGH NAGAR">UDAM SINGH NAGAR</option>
                                        <option value="UTTAR KASHI">UTTAR KASHI</option>
                                        <option value="24 PARAGANAS NORTH">24 PARAGANAS NORTH</option>
                                        <option value="24 PARAGANAS SOUTH">24 PARAGANAS SOUTH</option>
                                        <option value="BANKURA">BANKURA</option>
                                        <option value="BARDHAMAN">BARDHAMAN</option>
                                        <option value="BIRBHUM">BIRBHUM</option>
                                        <option value="COOCHBEHAR">COOCHBEHAR</option>
                                        <option value="DARJEELING">DARJEELING</option>
                                        <option value="DINAJPUR DAKSHIN">DINAJPUR DAKSHIN</option>
                                        <option value="DINAJPUR UTTAR">DINAJPUR UTTAR</option>
                                        <option value="HOOGHLY">HOOGHLY</option>
                                        <option value="HOWRAH">HOWRAH</option>
                                        <option value="JALPAIGURI">JALPAIGURI</option>
                                        <option value="MALDAH">MALDAH</option>
                                        <option value="MEDINIPUR EAST">MEDINIPUR EAST</option>
                                        <option value="MEDINIPUR WEST">MEDINIPUR WEST</option>
                                        <option value="MURSHIDABAD">MURSHIDABAD</option>
                                        <option value="NADIA">NADIA</option>
                                        <option value="PURULIA">PURULIA</option>
                                    </select>
                                    <div className="invalid-feedback">Crop is required</div>
                                </div>
                            </div>
                            <div className="mb-3 d-flex">
                                <div className="mr-3 flex-grow-1">
                                    <label className="mb-2 label-large" htmlFor="Stroke">
                                        Season <span>*</span>
                                    </label>
                                    <select
                                        id="Season"
                                        className="form-control custom-dropdown"
                                        name="Season"
                                        value={formData.Season}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="">Select an option</option>
                                        <option value="Kharif">Kharif</option>
                                        <option value="Whole Year">Whole Year</option>
                                        <option value="Autumn">Autumn</option>
                                        <option value="Rabi">Rabi</option>
                                        <option value="Summer">Summer</option>
                                        <option value="Winter">Winter</option>

                                    </select>
                                    <div className="invalid-feedback">Crop is required</div>
                                </div>
                            </div>
                            <div className="mb-3 d-flex">
                                <div className="mr-3 flex-grow-1">
                                    <label className="mb-2 label-large" htmlFor="Stroke">
                                        Crop <span>*</span>
                                    </label>
                                    <select
                                        id="Crop"
                                        className="form-control custom-dropdown"
                                        name="Crop"
                                        value={formData.Crop}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="">Select an option</option>
                                        <option value="Arecanut">Arecanut</option>
                                        <option value="Other Kharif pulses">Other Kharif pulses</option>
                                        <option value="Rice">Rice</option>
                                        <option value="Banana">Banana</option>
                                        <option value="Cashewnut">Cashewnut</option>
                                        <option value="Coconut">Coconut</option>
                                        <option value="Dry ginger">Dry ginger</option>
                                        <option value="Sugarcane">Sugarcane</option>
                                        <option value="Sweet potato">Sweet potato</option>
                                        <option value="Tapioca">Tapioca</option>
                                        <option value="Black pepper">Black pepper</option>
                                        <option value="Dry chillies">Dry chillies</option>
                                        <option value="other oilseeds">Other oilseeds</option>
                                        <option value="Turmeric">Turmeric</option>
                                        <option value="Maize">Maize</option>
                                        <option value="Moong(Green Gram)">Moong(Green Gram)</option>
                                        <option value="Urad">Urad</option>
                                        <option value="Arhar/Tur">Arhar/Tur</option>
                                        <option value="Groundnut">Groundnut</option>
                                        <option value="Sunflower">Sunflower</option>
                                        <option value="Bajra">Bajra</option>
                                        <option value="Castor seed">Castor seed</option>
                                        <option value="Cotton(lint)">Cotton(lint)</option>
                                        <option value="Horse-gram">Horse-gram</option>
                                        <option value="Jowar">Jowar</option>
                                        <option value="Korra">Korra</option>
                                        <option value="Ragi">Ragi</option>
                                        <option value="Tobacco">Tobacco</option>
                                        <option value="Gram">Gram</option>
                                        <option value="Wheat">Wheat</option>
                                        <option value="Masoor">Masoor</option>
                                        <option value="Sesamum">Sesamum</option>
                                        <option value="Linseed">Linseed</option>
                                        <option value="Safflower">Safflower</option>
                                        <option value="Onion">Onion</option>
                                        <option value="other misc. pulses">Other misc. pulses</option>
                                        <option value="Samai">Samai</option>
                                        <option value="Small millets">Small millets</option>
                                        <option value="Coriander">Coriander</option>
                                        <option value="Potato">Potato</option>
                                        <option value="Other Rabi pulses">Other Rabi pulses</option>
                                        <option value="Soyabean">Soyabean</option>
                                        <option value="Beans & Mutter(Vegetable)">Beans & Mutter(Vegetable)</option>
                                        <option value="Bhindi">Bhindi</option>
                                        <option value="Brinjal">Brinjal</option>
                                        <option value="Citrus Fruit">Citrus Fruit</option>
                                        <option value="Cucumber">Cucumber</option>
                                        <option value="Grapes">Grapes</option>
                                        <option value="Mango">Mango</option>
                                        <option value="Orange">Orange</option>
                                        <option value="other fibres">Other fibres</option>
                                        <option value="Other Fresh Fruits">Other Fresh Fruits</option>
                                        <option value="Other Vegetables">Other Vegetables</option>
                                        <option value="Papaya">Papaya</option>
                                        <option value="Pome Fruit">Pome Fruit</option>
                                        <option value="Tomato">Tomato</option>
                                        <option value="Mesta">Mesta</option>
                                        <option value="Cowpea(Lobia)">Cowpea(Lobia)</option>
                                        <option value="Lemon">Lemon</option>
                                        <option value="Pome Granet">Pome Granet</option>
                                        <option value="Sapota">Sapota</option>
                                        <option value="Cabbage">Cabbage</option>
                                        <option value="Rapeseed &Mustard">Rapeseed &Mustard</option>
                                        <option value="Peas (vegetable)">Peas (vegetable)</option>
                                        <option value="Niger seed">Niger seed</option>
                                        <option value="Bottle Gourd">Bottle Gourd</option>
                                        <option value="Varagu">Varagu</option>
                                        <option value="Garlic">Garlic</option>
                                        <option value="Ginger">Ginger</option>
                                        <option value="Oilseeds total">Oilseeds total</option>
                                        <option value="Pulses total">Pulses total</option>
                                        <option value="Jute">Jute</option>
                                        <option value="Peas & beans (Pulses)">Peas & beans (Pulses)</option>
                                        <option value="Blackgram">Blackgram</option>
                                        <option value="Paddy">Paddy</option>
                                        <option value="Pineapple">Pineapple</option>
                                        <option value="Barley">Barley</option>
                                        <option value="Sannhamp">Sannhamp</option>
                                        <option value="Khesari">Khesari</option>
                                        <option value="Guar seed">Guar seed</option>
                                        <option value="Moth">Moth</option>
                                        <option value="Other Cereals & Millets">Other Cereals & Millets</option>
                                        <option value="Cond-spcs other">Cond-spcs other</option>
                                        <option value="Turnip">Turnip</option>
                                        <option value="Carrot">Carrot</option>
                                        <option value="Redish">Redish</option>
                                        <option value="Arcanut (Processed)">Arcanut (Processed)</option>
                                        <option value="Atcanut (Raw)">Atcanut (Raw)</option>
                                        <option value="Cashewnut Processed">Cashewnut Processed</option>
                                        <option value="Cashewnut Raw">Cashewnut Raw</option>
                                        <option value="Cardamom">Cardamom</option>
                                        <option value="Rubber">Rubber</option>
                                        <option value="Bitter Gourd">Bitter Gourd</option>
                                        <option value="Drum Stick">Drum Stick</option>
                                        <option value="Jack Fruit">Jack Fruit</option>
                                        <option value="Snak Guard">Snak Guard</option>
                                        <option value="Tea">Tea</option>
                                        <option value="Coffee">Coffee</option>
                                        <option value="Cauliflower">Cauliflower</option>
                                        <option value="Other Citrus Fruit">Other Citrus Fruit</option>
                                        <option value="Water Melon">Water Melon</option>
                                        <option value="Total foodgrain">Total foodgrain</option>
                                        <option value="Kapas">Kapas</option>
                                        <option value="Colocosia">Colocosia</option>
                                        <option value="Lentil">Lentil</option>
                                        <option value="Bean">Bean</option>
                                        <option value="Jobster">Jobster</option>
                                        <option value="Perilla">Perilla</option>
                                        <option value="Rajmash Kholar">Rajmash Kholar</option>
                                        <option value="Ricebean (nagadal)">Ricebean (nagadal)</option>
                                        <option value="Ash Gourd">Ash Gourd</option>
                                        <option value="Beet Root">Beet Root</option>
                                        <option value="Lab-Lab">Lab-Lab</option>
                                        <option value="Ribed Guard">Ribed Guard</option>
                                        <option value="Yam">Yam</option>
                                        <option value="Pump Kin">Pump Kin</option>
                                        <option value="Apple">Apple</option>
                                        <option value="Peach">Peach</option>
                                        <option value="Pear">Pear</option>
                                        <option value="Plums">Plums</option>
                                        <option value="Litchi">Litchi</option>
                                        <option value="Ber">Ber</option>
                                        <option value="Other Dry Fruit">Other Dry Fruit</option>
                                        <option value="Jute & mesta">Jute & mesta</option>

                                    </select>
                                    <div className="invalid-feedback">Crop is required</div>
                                </div>
                            </div>
                            <div className="mb-3 d-flex">
                                <div className="flex-grow-1">
                                    <label className="mb-2 label-large" >
                                        Area <span>*</span>
                                    </label>
                                    <input
                                        id="Area"
                                        placeholder="Enter Area in Hectares on which you grow crop"
                                        type="number"
                                        className="form-control"
                                        name="Temperature"
                                        value={formData.Area}
                                        onChange={handleChange}
                                        required
                                    />
                                    <div className="invalid-feedback">Area is required</div>
                                </div>
                            </div>
                            <div className="align-items-center">
                                <button type="submit" className="btn btn-primary">
                                    Predict
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="steps-container">
                <h2>Steps to Follow</h2>
                <ol>
                    <li>
                        <strong>Enter District Information:</strong> Provide the name of your district in the "District Name" field.
                    </li>
                    <li>
                        <strong>Specify Current Season:</strong> Enter the current season in the "Season" field (e.g., Summer, Monsoon).
                    </li>
                    <li>
                        <strong>Select Crop Type:</strong> Choose the crop you want to predict the yield for from the dropdown list.
                    </li>
                    <li>
                        <strong>Input Growing Area:</strong> Enter the area on which you grow the selected crop in the "Area" field.
                    </li>
                    <li>
                        <strong>Click Predict:</strong> Use the "Predict" button to generate crop yield predictions based on the entered information.
                    </li>
                    <li>
                        <strong>Review Predictions:</strong> Evaluate the predicted crop yield results provided by the system.
                    </li>
                    <li>
                        <strong>Adjust as Needed:</strong> If necessary, make adjustments to your farming practices based on the yield predictions.
                    </li>
                    <li>
                        <strong>Submit for Detailed Analysis:</strong> For more in-depth analysis, submit the form for detailed crop yield insights.
                    </li>
                    <li>
                        <strong>Follow Annual Review:</strong> Periodically review and update the crop yield predictions based on changing conditions.
                    </li>
                </ol>
            </div>
        </div>
    );
}

export default CropYieldPrediction
