import { collection, getDocs } from 'firebase/firestore';
import { db } from '../config/firebase-config';
import type ProjectType from '../types/ProjectType';

export const getSelectedProjects = async () => {
    const selectedProjectsCol = collection(db, "selected-projects");
    const selectedProjectsSnapshot = await getDocs(selectedProjectsCol);
    const selectedProjectsList = selectedProjectsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return selectedProjectsList as ProjectType[];
};

export const getMiscProjects = async () => {
    const miscProjectsCol = collection(db, "misc-projects");
    const miscProjectsSnapshot = await getDocs(miscProjectsCol);
    const miscProjectsList = miscProjectsSnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
    return miscProjectsList as ProjectType[];
};