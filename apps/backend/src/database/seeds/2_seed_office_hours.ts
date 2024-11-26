import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("office_hours").del();
  await knex("office_hours").insert([
    {
      course_id: 8371,
      host: "Shreyas Adireddy",
      mode: "remote",
      link: "https://discord.gg/eXU9Q7J8hm",
      start_time: "09:35:00",
      end_time: "10:25:00",
      day: "monday",
    },
    {
      course_id: 8371,
      host: "Chris Tressler",
      mode: "in-person",
      location: "MALA5200",
      start_time: "09:35:00",
      end_time: "10:25:00",
      day: "tuesday",
    },
    {
      course_id: 8371,
      host: "Shreyas Adireddy",
      mode: "remote",
      link: "https://discord.gg/eXU9Q7J8hm",
      start_time: "09:35:00",
      end_time: "10:25:00",
      day: "wednesday",
    },
    {
      course_id: 8371,
      host: "Tony Wong",
      mode: "remote",
      link: "https://discord.gg/eXU9Q7J8hm",
      start_time: "09:35:00",
      end_time: "10:25:00",
      day: "thursday",
    },
    {
      course_id: 8371,
      host: "Anna Albertelli",
      mode: "in-person",
      location: "MALA5200",
      start_time: "09:35:00",
      end_time: "10:25:00",
      day: "friday",
    },
    {
      course_id: 7699,
      host: "Adam Bracci",
      mode: "remote",
      link: "https://discord.gg/eXU9Q7J8hm",
      start_time: "10:40:00",
      end_time: "11:30:00",
      day: "monday",
    },
    {
      course_id: 7699,
      host: "Jackie Wang",
      mode: "in-person",
      location: "MALA5200",
      start_time: "10:40:00",
      end_time: "11:30:00",
      day: "tuesday",
    },
    {
      course_id: 7699,
      host: "Adam Benali",
      mode: "in-person",
      location: "MALA5200",
      start_time: "10:40:00",
      end_time: "11:30:00",
      day: "wednesday",
    },
    {
      course_id: 7699,
      host: "Tony Wong",
      mode: "remote",
      link: "https://discord.gg/eXU9Q7J8hm",
      start_time: "10:40:00",
      end_time: "11:30:00",
      day: "thursday",
    },
    {
      course_id: 7699,
      host: "Anna Albertelli",
      mode: "in-person",
      location: "MALA5200",
      start_time: "10:40:00",
      end_time: "11:30:00",
      day: "friday",
    },
    {
      course_id: 7699,
      host: "Shane Ferrell",
      mode: "in-person",
      location: "MALA5200",
      start_time: "11:45:00",
      end_time: "12:35:00",
      day: "thursday",
    },
    {
      course_id: 7699,
      host: "Shane Ferrell",
      mode: "in-person",
      location: "MALA5200",
      start_time: "12:50:00",
      end_time: "13:40:00",
      day: "wednesday",
    },
    {
      course_id: 8371,
      host: "Ethan King",
      mode: "in-person",
      location: "MALA5200",
      start_time: "13:55:00",
      end_time: "14:45:00",
      day: "monday",
    },
    {
      course_id: 8371,
      host: "Brandon Barker",
      mode: "in-person",
      location: "MALA5200",
      start_time: "13:55:00",
      end_time: "14:45:00",
      day: "tuesday",
    },
    {
      course_id: 8371,
      host: "Adam Hassan",
      mode: "in-person",
      location: "MALA5200",
      start_time: "13:55:00",
      end_time: "14:45:00",
      day: "friday",
    },
    {
      course_id: 8371,
      host: "Chris Tressler",
      mode: "in-person",
      location: "MALA5200",
      start_time: "16:05:00",
      end_time: "16:55:00",
      day: "monday",
    },
    {
      course_id: 8371,
      host: "Brandon Barker",
      mode: "in-person",
      location: "MALA5200",
      start_time: "16:05:00",
      end_time: "16:55:00",
      day: "wednesday",
    },
    {
      course_id: 8371,
      host: "Adam Bracci",
      mode: "remote",
      link: "https://discord.gg/eXU9Q7J8hm",
      start_time: "16:05:00",
      end_time: "16:55:00",
      day: "friday",
    },
  ]);

  await knex("office_hours").insert([
    {
      course_id: 7699,
      host: "Alex Eum",
      mode: "in-person",
      location: "MALA5200",
      start_time: "13:00",
      end_time: "15:00",
      day: "monday",
    },
    {
      course_id: 7699,
      host: "Olivia Bronstein",
      mode: "in-person",
      location: "MALA5200",
      start_time: "16:00",
      end_time: "18:00",
      day: "monday",
    },
    {
      course_id: 7699,
      host: "Dr. Ungor",
      mode: "in-person",
      location: "MALA3102",
      start_time: "10:30",
      end_time: "11:30",
      day: "tuesday",
    },
    {
      course_id: 7699,
      host: "William Sims",
      mode: "remote",
      link: "https://ufl.zoom.us/j/8699163501",
      start_time: "12:30",
      end_time: "14:30",
      day: "tuesday",
    },
    {
      course_id: 7699,
      host: "Tamim Khatib",
      mode: "in-person",
      location: "MALA5200",
      start_time: "14:30",
      end_time: "16:30",
      day: "tuesday",
    },
    {
      course_id: 7699,
      host: "Rohit Inampudi",
      mode: "in-person",
      location: "MALA5200",
      start_time: "08:30",
      end_time: "10:30",
      day: "wednesday",
    },
    {
      course_id: 7699,
      host: "Tamim Khatib",
      mode: "in-person",
      location: "MALA5200",
      start_time: "12:30",
      end_time: "14:30",
      day: "wednesday",
    },
    {
      course_id: 7699,
      host: "Wavid Bowman",
      mode: "hybrid",
      location: "MALA5200",
      link: "https://ufl.zoom.us/my/wavid.meeting.room",
      start_time: "14:30",
      end_time: "16:30",
      day: "wednesday",
    },
    {
      course_id: 7699,
      host: "Dr. Ungor",
      mode: "in-person",
      location: "MALA3102",
      start_time: "10:30",
      end_time: "11:30",
      day: "thursday",
    },
    {
      course_id: 7699,
      host: "William Sims",
      mode: "in-person",
      location: "MALA5200",
      start_time: "11:30",
      end_time: "13:30",
      day: "thursday",
    },
    {
      course_id: 7699,
      host: "Samuel Kim",
      mode: "in-person",
      location: "MALA5200",
      start_time: "14:00",
      end_time: "16:00",
      day: "thursday",
    },
    {
      course_id: 7699,
      host: "Jabir Hossain",
      mode: "in-person",
      location: "MALA5200",
      start_time: "11:00",
      end_time: "13:00",
      day: "friday",
    },
    {
      course_id: 7699,
      host: "Jabir Hossain",
      mode: "remote",
      link: "https://ufl.zoom.us/my/mjh.cop4533.fall2024?pwd=d0VjdVU4dHlMcFhWZFdpcjJ5R1dYZz09",
      start_time: "16:00",
      end_time: "18:00",
      day: "friday",
    },
  ]);

  await knex("office_hours").insert([
    {
      course_id: 10279,
      host: "Donald Honeycutt",
      mode: "remote",
      link: "https://ufl.zoom.us/j/6566276677",
      start_time: "11:30",
      end_time: "13:30",
      day: "tuesday",
    },
    {
      course_id: 10279,
      host: "Angela Wang",
      mode: "remote",
      link: "https://ufl.zoom.us/j/92719604724",
      start_time: "14:00",
      end_time: "15:00",
      day: "thursday",
    },
    {
      course_id: 10279,
      host: "Alan Wang",
      mode: "remote",
      link: "https://ufl.zoom.us/j/9428180696",
      start_time: "12:30",
      end_time: "13:30",
      day: "monday",
    },
    {
      course_id: 10279,
      host: "Annie Kakaveti",
      mode: "remote",
      link: "https://ufl.zoom.us/j/3220868135",
      start_time: "13:55",
      end_time: "15:50",
      day: "wednesday",
    },
    {
      course_id: 10279,
      host: "Chandini Palem",
      mode: "remote",
      link: "https://ufl.zoom.us/j/6919282743",
      start_time: "12:50",
      end_time: "13:55",
      day: "wednesday",
    },
    {
      course_id: 10279,
      host: "Jeevanram Munnangi",
      mode: "remote",
      link: "https://ufl.zoom.us/j/7735660826?pwd=MFYra0FnZmhXSHZXYlJ3VE5GMGkwZz09",
      start_time: "12:50",
      end_time: "14:45",
      day: "thursday",
    },
    {
      course_id: 10279,
      host: "Jason Guan",
      mode: "remote",
      link: "https://ufl.zoom.us/j/3526407684",
      start_time: "16:05",
      end_time: "16:55",
      day: "friday",
    },
    {
      course_id: 10279,
      host: "Luke Li",
      mode: "remote",
      link: "https://ufl.zoom.us/j/7692870532",
      start_time: "11:30",
      end_time: "13:00",
      day: "friday",
    },
    {
      course_id: 10279,
      host: "Alyssa Mann",
      mode: "remote",
      link: "https://ufl.zoom.us/j/7549301517",
      start_time: "11:30",
      end_time: "12:30",
      day: "monday",
    },
    {
      course_id: 10279,
      host: "Robert Meekins",
      mode: "remote",
      link: "https://ufl.zoom.us/my/robertmeekins",
      start_time: "11:45",
      end_time: "12:45",
      day: "monday",
    },
    {
      course_id: 10279,
      host: "Lexi Szafranski",
      mode: "remote",
      link: "https://us05web.zoom.us/j/85228036643?pwd=xXHQmkpY4aD3cFwJaRQalekzm89Ita.1",
      start_time: "14:30",
      end_time: "15:30",
      day: "tuesday",
    },
    {
      course_id: 10279,
      host: "Calvin Perez",
      mode: "remote",
      link: "https://ufl.zoom.us/j/7880993505",
      start_time: "10:40",
      end_time: "11:40",
      day: "wednesday",
    },
    {
      course_id: 10279,
      host: "William Sobczak",
      mode: "remote",
      link: "https://ufl.zoom.us/j/97132857579",
      start_time: "10:40",
      end_time: "11:40",
      day: "monday",
    },
    {
      course_id: 10279,
      host: "Shobhit Singh",
      mode: "remote",
      link: "https://ufl.zoom.us/j/95931695342",
      start_time: "09:00",
      end_time: "10:00",
      day: "wednesday",
    },
  ]);
}