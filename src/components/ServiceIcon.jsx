import { FaChalkboardTeacher, FaClipboardCheck, FaCogs, FaFileUpload, FaHeartbeat } from 'react-icons/fa'

const icons = {
  health: FaHeartbeat,
  training: FaChalkboardTeacher,
  solution: FaClipboardCheck,
  esocial: FaFileUpload,
  machine: FaCogs,
}

export default function ServiceIcon({ name, ...props }) {
  const Icon = icons[name] ?? FaClipboardCheck
  return <Icon {...props} />
}
