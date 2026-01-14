const express = require('express');
const { protect, isStaff } = require('../middleware/authMiddleware');
const Project = require('../models/Project');

const router = express.Router();

// GET all projects (Public)
router.get('/', async (req, res) => {
  try {
    const projects = await Project.find({}).sort({ createdAt: -1 });
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// The following routes are protected and require staff or admin privileges.

// POST a new project
router.post('/', protect, isStaff, async (req, res) => {
  const {
    projectName,
    clientType,
    techStack,
    imageUrl,
    problem,
    solution,
    impact,
  } = req.body;
  try {
    const project = await Project.create({
      projectName,
      clientType,
      techStack,
      imageUrl,
      problem,
      solution,
      impact,
    });
    res.status(201).json(project);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// UPDATE a project
router.put('/:id', protect, isStaff, async (req, res) => {
  const { id } = req.params;
  try {
    const project = await Project.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!project) {
      return res.status(404).json({ error: 'Project not found' });
    }
    res.status(200).json(project);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// DELETE a project
router.delete('/:id', protect, isStaff, async (req, res) => {
  const { id } = req.params;
  try {
    const project = await Project.findByIdAndDelete(id);
    if (!project) {
      return res.status(404).json({ error: 'Project not found' });
    }
    res.status(200).json({ message: 'Project deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
