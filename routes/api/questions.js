// Matches with "/api/questions"
router.route("api/questions")
  .get(questionsController.findTen)
  .post(questionsController.updateWithAnswer)

module.exports = router;