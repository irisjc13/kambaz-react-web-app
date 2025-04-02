/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";

const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
const ENROLLMENTS_API = `${REMOTE_SERVER}/api/enrollments`;

/**
 * Enroll a user in a course.
 * Expects an enrollment object: { user: string, course: string }
 */
export const enrollUser = async (enrollment: any) => {
  const response = await axios.post(ENROLLMENTS_API, enrollment);
  return response.data;
};

/**
 * Unenroll a user by enrollment ID.
 */
export const unenrollUser = async (enrollmentId: string) => {
  const response = await axios.delete(`${ENROLLMENTS_API}/${enrollmentId}`);
  return response.data;
};

/**
 * Optionally, fetch enrollments for a given user.
 */
export const findEnrollmentsByUser = async (userId: string) => {
  const response = await axios.get(`${REMOTE_SERVER}/api/enrollments/user/${userId}`);
  return response.data;
};
