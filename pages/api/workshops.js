export default async (req, res) => {
  const { getWorkshopSections } = require('../../lib/data')
  const sections = await getWorkshopSections()
  res.json(sections)
}