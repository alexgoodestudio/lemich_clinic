import { Helmet } from 'react-helmet-async';
import { useEffect } from "react";
import armbruster from "./staffimages/armbruster.avif";
import casey from "./staffimages/casey.avif";
import garner from "./staffimages/garner-min.jpeg";
import goulart from "./staffimages/goulart-min.jpeg";
import henderson from "./staffimages/henderson-min.jpeg";
import ladikos from "./staffimages/ladikos.avif";
import lemich from "./staffimages/lemich-min.jpeg";
import lindelof from "./staffimages/Lindelof.avif";
import little from "./staffimages/litle.avif";
import mcnair from "./staffimages/mcnair.avif";
import meltesen from "./staffimages/meltesen-min.jpeg";
import moghaddam from "./staffimages/moghaddam.avif";
import nardone from "./staffimages/nardone.jpeg";
import murdock from "./staffimages/murdock.avif";
import perez from "./staffimages/Perez.avif";
import reike from "./staffimages/reike.avif";
import rominger from "./staffimages/Rominger.avif";
import stone from "./staffimages/stone-min.jpeg";
import templeton from "./staffimages/templeton-min.jpeg";
import "../../App.css";



const images = {
  armbruster,
  casey,
  garner,
  goulart,
  henderson,
  ladikos,
  lemich,
  lindelof,
  little,
  mcnair,
  meltesen,
  moghaddam,
  murdock,
  nardone,
  perez,
  reike,
  rominger,
  stone,
  templeton,
};

function Team() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const team = [
    {
      name: "Gregory C. Lemich, Ph.D., LPC",
      role: "Owner and Clinical Director",
      description:
        "Dr. Lemich is an independently-licensed professional counselor in Norfolk, Virginia and is the founder of the Lemich Clinic. He received his MS from Loyola University Maryland and his PhD from Old Dominion University. He counseled at Johns Hopkins, Sentara, Veterans Affairs, and for various private practices. As a professor at Old Dominion University, he is well versed in many clinical methods and customizing the counseling experience. His clinical specializations are active duty military, suicidal ideations, and PTSD.",
      lastName: "lemich",
      specialties: "",
      availability: "",
    },
    {
      name: "Kezia McNair, MSeD, Resident in Counseling (VA)",
      role: "Clinician",
      description:
        "Kezia holds a Masters in Mental Health Counseling from Old Dominion University and Bachelors in Human Services. She has counseled for Chesapeake Regional Hospital and has 8 years experience with the Department of Veteran Services. She thrives at helping military members identify stressors, learn new tools for change, and find adjustments to improve wellness.",
      lastName: "mcnair",
      specialties: "",
      availability: "In-Person and Telehealth",
    },
    {
      name: "Anthony Ladikos, MSeD, Resident in Counseling (VA)",
      role: "Clinician",
      description:
        "Anthony holds a Masters in Mental Health Counseling from Old Dominion University and a Bachelors in Psychology with a minor in Criminal Justice. He has counseled at the LGBT Life Center and the EVMS HOPES clinic and previously worked as a substitute grade-school teacher. He is supportive, compassionate, and attentive, able to focus on deep-seeded emotions and concerns of the past.",
      lastName: "ladikos",
      specialties: "Integrated and Trauma-Informed CBT",
      availability: "In-Person and Telehealth",
    },
    {
      name: "Lauren Murdock, MSeD, Resident in Counseling (VA)",
      role: "Clinician",
      description:
        "Lauren holds a Masters in Mental Health Counseling from Old Dominion University and a Bachelors in Political Science. She is a Navy veteran spouse and mother, having maintained work and home life while her husband was serving deployments overseas. She has counseled for the Farley Center and the Academic Resource Center at Old Dominion University. She thrives at helping military members work through stress, trauma, family challenges, and all that military life throws at us.",
      lastName: "murdock",
      specialties: "",
      availability: "Telehealth",
    },
    {
      name: "Sarah Rieke, MSeD, Resident in Counseling (VA)",
      role: "Clinician",
      description:
        "Sarah holds a Masters in Mental Health Counseling from Old Dominion University and a Bachelor’s Degree in Psychology from Liberty University. She has counseled at Chesapeake Regional Medical Center in both inpatient and outpatient settings, including providing mental health support services to the hospital staff. She has a wide range of clinical experience to include depression, anxiety, relationship difficulties, postpartum concerns, grief and loss, trauma, and coping with life transitions. Sarah fosters a warm, trusting therapeutic relationship with her clients to help facilitate their personal mental health and wellness goals.",
      lastName: "reike",
      specialties: "EMDR",
      availability: "In-Person and Telehealth",
    },
    {
      name: "Kiana Dabier Moghaddam, MSeD, Resident in Counseling (VA)",
      role: "Clinician",
      description:
        "Kiana holds a Masters in Mental Health Counseling from Old Dominion University and has a Bachelor’s Degree in Public Health. She counseled at Sunrise Counseling and worked as a Case Manager and Victim Advocate at Samaritan House. Kiana has extensive experience in refugee and immigrant resettlement challenges, human trafficking, domestic violence, sexual assault, and addiction. As a bicultural counselor and a Marine Corps spouse, she is fiercely committed to creating an environment of acceptance, collaboration, empowerment, and growth.",
      lastName: "moghaddam",
      specialties: "EMDR",
      availability: "Telehealth",
    },
    {
      name: "Elena Little, MSeD, Resident in Counseling (VA)",
      role: "Clinician",
      description:
        "Elena holds a Masters in Mental Health Counseling from Old Dominion University and has a bachelor’s degree in Psychology. She has provided counseling services at Virginia Beach Psychiatric Center’s inpatient and partial hospitalization programs. She has focused on substance abuse, psycho-educational, dual diagnose, trauma-informed care, and mood disorders. She supports those seeking help to with new tools to combat stressors, understand themselves deeper, and live more meaningful lives.",
      lastName: "little",
      specialties: "EMDR",
      availability: "In-Person and Telehealth",
    },
    {
      name: "Robert Armbruster (Robie), MSeD, Resident in Counseling (VA)",
      role: "Clinician",
      description:
        "Robie holds a Masters in Mental Health Counseling from Old Dominion University, a Masters in Systems Engineering from Naval Postgraduate School, and a Masters in Natural Science (Psychology) from the University of Cambridge. He served 24 years in the U.S. Navy. He has counseled at the Faye Bonnick Counseling Center, specializing in aiding couples recover from betrayal trauma. He creates a calm, welcoming environment for exploration of the root causes of current issues.",
      lastName: "armbruster",
      specialties: "EMDR, Grief-Informed Counseling, Complex Trauma, and Addiction.",
      availability: "In-Person and Telehealth",
    },
    {
      name: "Ashley Casey, MSeD, Resident in Counseling (VA)",
      role: "Clinician",
      description:
        "Ashley holds a Masters in Mental Health Counseling from Old Dominion University and has a bachelor’s degree in Geography. She has provided counseling services at the LGBT Life Center, Chesapeake Regional Healthcare, and has worked in private practice. Her clinical experience includes working with LGBT+ clients, exploring relationship and attachment issues, anxiety, depression, gender dysphoria, and alcohol use disorder. As a veteran and military spouse herself, Ashley has a passion for working with military clients and their families. She seeks to meet clients where they're at, and strives to provide a warm and accepting environment for all.",
      lastName: "casey",
      specialties: "ACT",
      availability: "In-Person and Telehealth",
    },
    {
      name: "Hayli Stone, MSeD, Resident in Counseling (VA)",
      role: "Clinician",
      description:
        "Hayli holds a Masters Degree in Mental Health Counseling from Old Dominion University and holds a Bachelor’s Degree in Liberal Studies from SUNY Purchase. She has provided counseling services at Chesapeake Regional Hospital and Grassfield Primary Care Clinic. Her clinical experience includes anxiety, depression, trauma, relationship difficulties and LGBTQ affirming care. She is committed to providing a warm and nonjudgmental environment in which clients are able to feel heard and supported as they work towards their personal goals.",
      lastName: "stone",
      specialties: "EMDR",
      availability: "In-Person and Telehealth",
    },
        {
      name: "TJ Meltesen, MSeD, Resident in Counseling (VA)",
      role: "Clinician",
      description:
        "TJ holds a Masters in Mental Health Counseling at ODU. She holds a Bachelor's degree in Rehabilitation Psychology from the University of Wisconsin-Madison. Having served in the Navy, TJ possesses a valuable understanding of military culture and the challenges of transitioning out of the military. She has a strong background in supporting families and individuals dealing with developmental, physical, and neurodivergent concerns. TJ recognizes the profound impact of bereavement and grief on various aspects of life. She offers a space that is both non-judgmental and collaborative. Her passion lies in helping individuals tap into their inner strengths and embrace authenticity.",
      lastName: "meltesen",
      specialties: "",
      availability: "In-Person and Telehealth",
    },
    {
      name: "Amanda Henderson, MSeD, Resident in Counseling (VA)",
      role: "Clinician",
      description:
        "Amanda holds a Masters in Mental Health Counseling at ODU, and currently holds a B.S. in psychology and human services. As both a Navy veteran and military spouse, she has extensive knowledge and experience surrounding military issues and culture. Amanda has served as a career counselor and sexual assault victim advocate during her time in the military; she also has experience with domestic violence issues from her time working at a women’s shelter. Utilizing an eclectic counseling approach, she collaborates closely with clients to achieve their goals, fostering a nurturing environment that supports healing and personal growth.",
      lastName: "henderson",
      specialties: "",
      availability: "In-Person and Telehealth",
    },
    {
      name: "Amy Garner, MSeD, Resident in Counseling (VA)",
      role: "Clinician",
      description:
        "Amy holds a Masters in Mental Health Counseling at ODU. She currently holds a B.A in psychology and has over 20 years of military-related experience as a Navy spouse, mother, and volunteer. By working hand in hand with commands, sailors, and spouses, Amy developed a unique perspective on the challenges that come with military life. As a parent, she gained extensive experience working with children with disabilities and the foster care/adoption communities. Clinically, Amy has worked at Chesapeake Regional Medical Center, counseling in both the inpatient and outpatient settings. She has experience working with military and life transitions, depression, anxiety, postpartum concerns, trauma, and life stressors. Amy utilizes a holistic approach, collaborating with clients to achieve their goals. Her warm, compassionate demeanor creates a safe space for clients to explore their concerns and embrace personal growth.",
      lastName: "garner",
      specialties: "",
      availability: "In-Person and Telehealth",
    },
    {
      name: "Crystal Goulart, MSeD, Resident in Counseling (VA)",
      role: "Clinician",
      description:
        "Crystal holds a Masters in Mental Health Counseling at ODU, with an expected graduation date of December 2024.  Drawing from her own personal experiences as a Navy veteran and former foster youth, Crystal has developed a profound belief in the transformative power of counseling. With a genuine passion for helping others, Crystal creates a supportive environment where clients feel heard and valued. Each session with Crystal is a partnership focused on understanding individual experiences, validating emotions, and setting achievable goals. Her approach emphasizes trust, empathy, and respect, ensuring that clients feel empowered on their journey towards healing and personal growth. Crystal is committed to making a positive difference in the lives of those she serves, leveraging her background to offer compassionate support and understanding.",
      lastName: "goulart",
      specialties: "",
      availability: "In-Person and Telehealth",
    },
    {
      name: "Morgan Templeton, Intern in Counseling (VA)",
      role: "Clinician",
      description:
        "Morgan is currently an intern pursuing her Master's in Mental Health Counseling at ODU, with an expected graduation date of August 2025. She currently holds a B.S. in psychology and has previous experience working with military members at a psychology clinic in Germany. As a military dependent, she has a valuable understanding of military culture and issues, as well as the effects of these issues on military families. Her eclectic approach emphasizes creating an environment that fosters feelings of safety, empowerment, and trust.",
      lastName: "templeton",
      specialties: "",
      availability: "In-Person and Telehealth",
    },
    {
      name: "Emily Nardone, Intern in Counseling (VA)",
      role: "Clinician",
      description:
        "Emily N. is a practicum student pursuing her Master's in Clinical Mental Health Counseling at Old Dominion University. She holds a Bachelor's degree in Psychology and Neuroscience from Elon University. With strong personal ties to the military through her father and partner, Emily has a deep understanding of military culture and is passionate about supporting service members and their families. Emily's approach is focused on helping clients achieve their goals while promoting healing and personal growth. She is dedicated to creating a supportive and welcoming environment where clients feel comfortable and valued.",
      lastName: "nardone",
      specialties: "",
      availability: "In-Person and Telehealth",
    },
    {
      name: "Karen Rominger",
      role: "Case Manager and Office Coordinator",
      description:
        "Karen holds a Masters in Public Health from Eastern Virginia Medical School and a Bachelors in Biology from Christopher Newport University with a minor in Spanish. In her position as Office Manager, she works closely with clients to ensure their experience at The Lemich Clinic runs smoothly. As a Navy spouse and mother, she can relate to many of the challenges that come with the military lifestyle. In her role as a Case Manager, she will work with you to ensure you have access to various resources to help you along your journey to bettering your health.",
      lastName: "rominger",
      specialties: "Billing, Scheduling, Military Resources",
      availability: "",
    },
    {
      name: "Kalyn Lindelof",
      role: "Psych Tech and Assistant Office Coordinator",
      description:
        "Kalyn holds a Bachelors in Psychology from Southern Virginia University and experience in office management. While not yet in a Masters program for Mental Health Counseling, she looks forward to it in the future. She is a Navy wife, and mother and therefore can relate and empathize with the difficulties of military life. Around the office Kalyn assigns psych assessments and tests for the clients in our office, does onboarding and scheduling, and other various tasks.",
      lastName: "lindelof",
      specialties: "Assessments, Scheduling, Onboarding",
      availability: "",
    },
    {
      name: "Maggie Perez",
      role: "Assistant Office Coordinator",
      description:
        "Maggie holds a Bachelors degree in Psychology from Columbia Southern University. In her position as admin associate she works closely with clients to ensure their experience at The Lemich Clinic runs smoothly. As a Navy veteran, Navy spouse and mother, she can relate to many of the challenges that come with the military lifestyle in both active duty, and off the ship life. In her role as an office assistant she will work with you to ensure you have access to various resources to help you along your journey to bettering your health.",
      lastName: "perez",
      specialties: "Resources, Scheduling, Onboarding, Assessments",
      availability: "",
    },
  ];

  return (
    <div className="bg-slate-50 py-12">
      <Helmet>
  <title>Meet The Team • The Lemich Clinic • Norfolk, VA | Military Mental Health Services</title>
  <meta
    name="description"
    content="Meet the team at The Lemich Clinic. Experts in mental health services for veterans and military personnel in Norfolk, and Virginia Beach VA."
  />
</Helmet>

      <div className="container mx-auto ">
      <h1 className=" text-4xl barlow text-start mb-1">
        Meet Our Team
      </h1>
        {/* Gregory C. Lemich */}
        <div className="row bg-white shadow-lg p-4 mb-5 mt-5">
        <div className="mx-auto col-lg-3">
          <div className="w-60 h-60 mx-auto rounded-full bg-gray-200 overflow-hidden">
            <img
              src={lemich}
              alt="Gregory C. Lemich"
              className="zoom w-full h-full object-cover zoom"
            />
          </div>
        </div>
        <div className="col-lg-9 col-sm-12 text-start">
          <h3 className="text-lg   mt-4">
            Gregory C. Lemich, Ph.D., LPC
          </h3>
          <p className="text-gray-600 mt-2">Owner and Clinical Director</p>
          <p className="text-gray-700 mt-4 text-sm text-justify">
            {team[0].description}
          </p>
        </div>
      </div>


        {/* Clinicians */}
        <h2 className="text-4xl  thin text-center text-gray-800 mb-8">
          Clinicians 
        </h2>
          <p className="text-start p-lg-3 text-sm p-2 border rounded bg-slate-100">Our counselors have a Master's Degree in Mental Health Counseling and are licensed by Virginia to perform empirically validated medical counseling.</p>   
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team
            .filter((member) => member.role === "Clinician")
            .map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 text-center"
              >
                <div className="w-60 h-60 mx-auto rounded-full bg-gray-200 mb-4">
                  <img
                    src={images[member.lastName]}
                    alt={member.name}
                    className="zoom w-full h-full zoom object-cover rounded-full"
                  />
                </div>
                <h4 className="text-lg manrope-semibold text-gray-800">
                  {member.name}
                </h4>
                <p className="text-sm text-gray-500">{member.role}</p>
                <p className="text-sm  text-gray-700 mt-2 text-justify">{member.description}</p>
                {member.specialties && (
                  <p className="text-sm text-gray-600 mt-2">
                    <span className="font-bold">Specialties: </span>
                    {member.specialties}
                  </p>
                )}
                {member.availability && (
                  <p className="text-sm text-gray-600 mt-2">
                    <span className="font-bold">Availability: </span>
                    {member.availability}
                  </p>
                )}
              </div>
            ))}
        </div>

        {/* Administration */}
        <h2 className="text-4xl thin text-center text-gray-800 mt-12 mb-8">
          Administration
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team
            .filter(
              (member) =>
                member.role === "Case Manager and Office Coordinator" ||
                member.role === "Psych Tech and Assistant Office Coordinator" ||
                member.role === "Assistant Office Coordinator"
            )
            .map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 text-center"
              >
                <div className="w-60 h-60 mx-auto rounded-full bg-gray-200 mb-4">
                  <img
                    src={images[member.lastName]}
                    alt={member.name}
                    className="zoom w-full h-full zoom object-cover rounded-full"
                  />
                </div>
                <h3 className="text-lg manrope-semibold text-gray-800">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-500">{member.role}</p>
                <p className="text-sm text-gray-700 mt-2 text-justify">{member.description}</p>
                {member.specialties && (
                  <p className="text-sm text-gray-600 mt-2">
                    <span className="font-bold">Areas of Focus: </span>
                    {member.specialties}
                  </p>
                )}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Team;
