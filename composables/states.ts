interface User {
  id: number,
  name: string,
  certificationYear: number,
  certificationExpires: number,
  avatarUrl: string | undefined,
  events: number[],
}

interface MyEvent {
  id: number
  name: string,
  institution: string,
  date: string,
  description: string,
  certificationPoints: number,
}


export const useUsers = () => useState
  <User[]>('users', () => [
    {
      id: 1,
      name: 'John Doe',
      certificationYear: 2021,
      certificationExpires: 2024,
      avatarUrl: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
      events: [2, 3, 4, 5],
    },
    {
      id: 2,
      name: 'Jane Doe',
      certificationYear: 2021,
      certificationExpires: 2024,
      avatarUrl: 'https://i.pravatar.cc/150?img=2',
      events: [1, 9],
    },
    {
      id: 3,
      name: 'Bob Smith',
      certificationYear: 2021,
      certificationExpires: 2024,
      avatarUrl: 'https://i.pravatar.cc/150?img=3',
      events: [5],
    },
    {
      id: 4,
      name: 'Alice Smith',
      certificationYear: 2021,
      certificationExpires: 2024,
      avatarUrl: 'https://i.pravatar.cc/150?img=4',
      events: [6, 7, 8],
    },
    {
      id: 5,
      name: 'Tom Smith',
      certificationYear: 2021,
      certificationExpires: 2024,
      avatarUrl: 'https://i.pravatar.cc/150?img=5',
      events: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    },
  ])

export const useUser = (<number>id) => useState
  <User>('user', () => {
    const user = useUsers().value.filter((u) => u.id == id)[0];
    return user;
  });

export const useUserEvents = (<number>id) => useState
  <MyEvent[]>('userEvents', () => {
    const user = useUser(id).value;
    return user.events.map((eventId) => useEvent(eventId).value);
  })

export const useEvent = (<number>id) => useState
  <MyEvent>('event', () => {
    const event = useEvents().value.filter((e) => e.id == id)[0];
    return event
  })

export const useEvents = () => useState
  <MyEvent[]>('events', () => [
    {
      id: 1,
      name: "Neurofisiología y Neuroimagen: Perspectivas Interdisciplinarias",
      institution: "Sociedad Internacional de Neurofisiología Clínica (ISCN)",
      date: "2020-08-10",
      description: "Explore la intersección de la neurofisiología y la neuroimagen.",
      certificationPoints: 1,
    },
    {
      id: 2,
      name: "Neurofisiología de la Conciencia",
      institution: "Instituto Tecnológico de Massachusetts (MIT)",
      date: "2022-03-15",
      description: "Explore la última investigación sobre la base neural de la conciencia.",
      certificationPoints: 2,
    },
    {
      id: 3,
      name: "Neurofisiología Clínica: Principios y Técnicas",
      institution: "Universidad de California, San Francisco (UCSF)",
      date: "2021-11-10",
      description: "Domine los fundamentos de la neurofisiología clínica.",
      certificationPoints: 3,
    },
    {
      id: 4,
      name: "Monitoreo Neurofisiológico Avanzado",
      institution: "Clínica Mayo",
      date: "2020-09-22",
      description: "Mejore sus habilidades en técnicas de monitoreo neurofisiológico.",
      certificationPoints: 4,
    },
    {
      id: 4,
      name: "Electroencefalografía (EEG) para el Diagnóstico de Epilepsia",
      institution: "Sociedad Americana de Epilepsia",
      date: "2023-05-04",
      description: "Adquiera experiencia en EEG para el diagnóstico y manejo de la epilepsia.",
      certificationPoints: 2,
    },
    {
      id: 5,
      name: "Potenciales Evocados: Aplicaciones Clínicas",
      institution: "Sociedad Americana de Neurofisiología Clínica (ACNS)",
      date: "2022-02-01",
      description: "Conozca las aplicaciones clínicas de los potenciales evocados.",
      certificationPoints: 3,
    },
    {
      id: 6,
      name: "Trastornos Neuromusculares: Evaluación Electrodiagnóstica",
      institution: "Universidad de Oxford",
      date: "2021-10-19",
      description: "Desarrolle experiencia en la evaluación electrodiagnóstica de trastornos neuromusculares.",
      certificationPoints: 4,
    },
    {
      id: 7,
      name: "Trastornos del Sueño: Evaluación Neurofisiológica",
      institution: "Academia Americana de Medicina del Sueño (AASM)",
      date: "2020-08-31",
      description: "Adquiera dominio en la evaluación neurofisiológica de los trastornos del sueño.",
      certificationPoints: 3,
    },
    {
      id: 8,
      name: "Neurofisiología del Envejecimiento",
      institution: "Institutos Nacionales de Salud (NIH)",
      date: "2023-04-27",
      description: "Explore los cambios neurofisiológicos asociados con el envejecimiento.",
      certificationPoints: 2,
    },
    {
      id: 9,
      name: "Métodos de Investigación Neurofisiológica",
      institution: "Sociedad para la Neurociencia (SfN)",
      date: "2022-01-18",
      description: "Domine metodologías avanzadas de investigación neurofisiológica.",
      certificationPoints: 4,
    },
    {
      id: 10,
      name: "Neurofisiología en la Práctica Clínica: Estudios de Caso",
      institution: "Junta Americana de Psiquiatría y Neurología (ABPN)",
      date: "2021-09-28",
      description: "Analice estudios de casos de neurofisiología del mundo real.",
      certificationPoints: 3,
    },
  ]);


