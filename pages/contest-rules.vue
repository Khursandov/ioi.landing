<template>
  <div class="bg-gray-50 pt-24">
    <div class="container mx-auto px-4 py-8 md:py-12">
      <div class="mx-auto max-w-5xl">
        <!-- Header -->
        <div class="mb-8 md:mb-12">
          <h1
            class="mb-4 text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl"
          >
            Contest Rules
          </h1>
          <p class="text-lg text-gray-600">
            IOI 2026 Contest Rules and Regulations
          </p>
          <div class="mt-4 rounded-lg bg-blue-50 p-4">
            <p class="text-sm text-blue-800">
              <strong>Note:</strong> This document may be revised to address
              omissions or inconsistencies, but will not change substantially.
            </p>
          </div>
        </div>

        <!-- Content -->
        <div class="space-y-8">
          <!-- Introduction -->
          <section class="rounded-lg bg-white p-6 shadow-sm md:p-8">
            <p class="text-base leading-relaxed text-gray-700 md:text-lg">
              Delegation Leaders have the responsibility to ensure that all
              members of their delegation fully understand these rules and abide
              by them.
            </p>
            <div class="mt-4">
              <p class="mb-2 font-semibold text-gray-900">
                For additional documents regulating IOI, please refer to:
              </p>
              <ul class="list-inside list-disc space-y-1 text-gray-700">
                <li>IOI regulations</li>
                <li>IOI syllabus</li>
                <li>IOI Code of Conduct</li>
                <li>Competition Equipment</li>
                <li>Grading environment</li>
              </ul>
            </div>
          </section>

          <!-- Competition Schedule -->
          <section class="rounded-lg bg-white p-6 shadow-sm md:p-8">
            <h2
              class="mb-4 text-2xl font-bold text-gray-900 md:mb-6 md:text-3xl"
            >
              Competition Schedule
            </h2>
            <div class="space-y-4 text-base leading-relaxed text-gray-700">
              <p>
                There will be two competition days. On each day contestants will
                be given three tasks to complete in 5 hours.
              </p>
              <p>
                There will be a 2 hour Practice Competition prior to the first
                competition day, to familiarize all contestants with the grading
                system. The tasks used in the Practice Competition will be
                published before the IOI. Contestants may bring printed
                solutions to these tasks, on paper only, during the Practice
                Competition.
              </p>
            </div>
          </section>

          <!-- Grading System -->
          <section class="rounded-lg bg-white p-6 shadow-sm md:p-8">
            <h2
              class="mb-4 text-2xl font-bold text-gray-900 md:mb-6 md:text-3xl"
            >
              Grading System
            </h2>
            <div class="space-y-4 text-base leading-relaxed text-gray-700">
              <p>
                Grading and evaluation take place on the grading system, which
                provides a similar execution environment for every solution
                submission. The workstations have network access to the grading
                system.
              </p>
              <div class="rounded-lg bg-yellow-50 p-4">
                <p class="text-yellow-800">
                  <strong>Important:</strong> Grading workstations will have
                  similar hardware to contestant workstations. However, due to
                  differences in software configurations, an identical execution
                  environment between contestant and grading workstations is not
                  guaranteed.
                </p>
              </div>
            </div>
          </section>

          <!-- Tasks -->
          <section class="rounded-lg bg-white p-6 shadow-sm md:p-8">
            <h2
              class="mb-4 text-2xl font-bold text-gray-900 md:mb-6 md:text-3xl"
            >
              Tasks
            </h2>
            <div class="space-y-4 text-base leading-relaxed text-gray-700">
              <p>
                Each contestant will receive the official English version of the
                tasks in an envelope on each contest day. The team leaders can
                translate the task statements for contestants and the translated
                statements will be provided in the envelope with the English
                version.
              </p>
              <p>
                Each task is divided into some number of subtasks, each worth a
                portion of the total points. Each subtask is either a
                <strong>programming subtask</strong> (the solution is source
                code) or an <strong>output-only subtask</strong> (the solution
                is a set of output files).
              </p>
              <div class="rounded-lg bg-gray-50 p-4">
                <h3 class="mb-2 font-semibold text-gray-900">
                  Time and Memory Limits
                </h3>
                <p>
                  For each programming subtask, time and memory limits are
                  specified. In general, time and memory limits are generous
                  (for example, double those required by the expected solution).
                  The memory limit is on the overall memory usage including
                  executable code size, stack, dynamically allocated memory,
                  etc.
                </p>
              </div>
            </div>
          </section>

          <!-- Solutions and Submissions -->
          <section class="rounded-lg bg-white p-6 shadow-sm md:p-8">
            <h2
              class="mb-4 text-2xl font-bold text-gray-900 md:mb-6 md:text-3xl"
            >
              Solutions and Submissions
            </h2>
            <div class="space-y-4 text-base leading-relaxed text-gray-700">
              <p>
                Contestants submit their solutions for tasks by using the
                grading system. Depending on the task, a submission may consist
                of a single C++ source file, one or more output files, or both.
              </p>

              <div class="rounded-lg bg-blue-50 p-4">
                <h3 class="mb-3 font-semibold text-blue-900">
                  C++ Source File Requirements:
                </h3>
                <ul class="list-inside list-disc space-y-2 text-blue-800">
                  <li>
                    Each submitted solution must be written in C++ and its size
                    must not exceed 50 KiB
                  </li>
                  <li>
                    Compilation must finish in at most 10 seconds and use at
                    most 512 MiB of memory
                  </li>
                  <li>
                    Submissions must not perform explicit input and output
                    operations
                  </li>
                  <li>
                    Direct access to any file, including standard input or
                    output, is forbidden
                  </li>
                </ul>
              </div>

              <div class="rounded-lg bg-orange-50 p-4">
                <h3 class="mb-3 font-semibold text-orange-900">
                  Submission Limits:
                </h3>
                <ul class="list-inside list-disc space-y-2 text-orange-800">
                  <li>
                    Contestants may submit a solution to each task at most once
                    per minute
                  </li>
                  <li>
                    This restriction does not apply in the last 15 minutes of
                    the contest round
                  </li>
                  <li>
                    Contestants may perform at most 50 submissions for each task
                  </li>
                </ul>
              </div>

              <p>
                <strong>Multiple Threads:</strong> Using multiple threads is
                allowed. Note that the running time of the submission will be
                counted as a sum of running times of all threads.
              </p>
            </div>
          </section>

          <!-- Scoring -->
          <section class="rounded-lg bg-white p-6 shadow-sm md:p-8">
            <h2
              class="mb-4 text-2xl font-bold text-gray-900 md:mb-6 md:text-3xl"
            >
              Scoring
            </h2>
            <div class="space-y-4 text-base leading-relaxed text-gray-700">
              <p>The scores for each task will be calculated as follows:</p>

              <div class="rounded-lg bg-green-50 p-4">
                <h3 class="mb-3 font-semibold text-green-900">
                  Scoring Process:
                </h3>
                <ol class="list-inside list-decimal space-y-2 text-green-800">
                  <li>Each subtask consists of some number of test cases</li>
                  <li>
                    For each submission, the score for each subtask is the
                    minimum of the scores for the test cases in the subtask
                  </li>
                  <li>
                    The final score for each subtask is the maximum of the
                    scores for this subtask across all submissions
                  </li>
                  <li>
                    The final score for each task is the sum of the scores for
                    its subtasks
                  </li>
                </ol>
              </div>

              <div class="rounded-lg bg-gray-100 p-4">
                <h3 class="mb-2 font-semibold text-gray-900">Example:</h3>
                <p class="text-gray-700">
                  Consider a contestant who made two submissions on a task that
                  contains two subtasks. If the first solution got 30 points for
                  the first subtask and 10 points for the second subtask, and
                  the second solution got 0 points for the first subtask and 40
                  points for the second subtask, then the final score for this
                  task will be 70 points (max(30,0) + max(10,40) = 30 + 40 =
                  70).
                </p>
              </div>

              <p class="font-semibold">
                The maximum score for each task is 100 points.
              </p>
            </div>
          </section>

          <!-- Feedback -->
          <section class="rounded-lg bg-white p-6 shadow-sm md:p-8">
            <h2
              class="mb-4 text-2xl font-bold text-gray-900 md:mb-6 md:text-3xl"
            >
              Feedback
            </h2>
            <div class="space-y-4 text-base leading-relaxed text-gray-700">
              <p>
                Contestants can use the grading system to view the status of
                their submissions and get a short report on the compilation
                results of their source code.
              </p>

              <div class="rounded-lg bg-purple-50 p-4">
                <h3 class="mb-3 font-semibold text-purple-900">
                  Feedback Types:
                </h3>
                <ul class="list-inside list-disc space-y-1 text-purple-800">
                  <li>Output is correct</li>
                  <li>Output isn't correct</li>
                  <li>Output is partially correct</li>
                  <li>Execution timed out</li>
                  <li>Execution killed (memory limit violation)</li>
                  <li>Execution failed (nonzero return code)</li>
                  <li>Protocol Violation</li>
                </ul>
              </div>

              <div class="rounded-lg bg-red-50 p-4">
                <h3 class="mb-2 font-semibold text-red-900">Important Note:</h3>
                <p class="text-red-800">
                  The score reported in the feedback is only provisional and may
                  change due to successful appeals or re-evaluation of
                  submissions.
                </p>
              </div>
            </div>
          </section>

          <!-- Clarification Requests -->
          <section class="rounded-lg bg-white p-6 shadow-sm md:p-8">
            <h2
              class="mb-4 text-2xl font-bold text-gray-900 md:mb-6 md:text-3xl"
            >
              Clarification Requests
            </h2>
            <div class="space-y-4 text-base leading-relaxed text-gray-700">
              <p>
                During the competition, contestants may ask questions concerning
                competition tasks, rules and/or grading. Questions should be
                submitted using the grading system whenever possible.
              </p>

              <div class="rounded-lg bg-blue-50 p-4">
                <h3 class="mb-3 font-semibold text-blue-900">
                  Question Guidelines:
                </h3>
                <ul class="list-inside list-disc space-y-2 text-blue-800">
                  <li>
                    Questions should be phrased so that a yes/no answer will
                    have a clear meaning
                  </li>
                  <li>
                    Avoid negative questions like "Isn't it true that...?"
                  </li>
                  <li>Use positive questions: "Is it true that...?"</li>
                </ul>
              </div>

              <div class="rounded-lg bg-gray-100 p-4">
                <h3 class="mb-3 font-semibold text-gray-900">
                  Possible Answers:
                </h3>
                <ul class="list-inside list-disc space-y-1 text-gray-700">
                  <li>"Yes"</li>
                  <li>"No"</li>
                  <li>"No Comment/Please refer to task statement"</li>
                  <li>"Invalid Question (not a Yes/No Question)"</li>
                </ul>
              </div>
            </div>
          </section>

          <!-- Cheating -->
          <section class="rounded-lg bg-white p-6 shadow-sm md:p-8">
            <h2
              class="mb-4 text-2xl font-bold text-gray-900 md:mb-6 md:text-3xl"
            >
              Cheating and Disqualification
            </h2>
            <div class="space-y-4 text-base leading-relaxed text-gray-700">
              <p>
                Violating any of the following rules is considered cheating and
                may result in disqualification:
              </p>

              <div class="rounded-lg bg-red-50 p-4">
                <h3 class="mb-3 font-semibold text-red-900">
                  Prohibited Activities:
                </h3>
                <ul class="list-inside list-disc space-y-2 text-red-800">
                  <li>
                    Using any workstation other than the one assigned to you
                  </li>
                  <li>
                    Attempting to tamper with or compromise the grading system
                  </li>
                  <li>
                    Attempting to gain root access or any unauthorized account
                  </li>
                  <li>Storing information outside of home directory or /tmp</li>
                  <li>
                    Accessing any network machine or Internet (except grading
                    system)
                  </li>
                  <li>Communicating with anyone except support staff</li>
                  <li>
                    Reverse engineering test data to build test-dependent
                    solutions
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <!-- Appeal Process -->
          <section class="rounded-lg bg-white p-6 shadow-sm md:p-8">
            <h2
              class="mb-4 text-2xl font-bold text-gray-900 md:mb-6 md:text-3xl"
            >
              Appeal Process
            </h2>
            <div class="space-y-4 text-base leading-relaxed text-gray-700">
              <p>
                The test cases used for grading will be made available
                electronically in the competition area during the scheduled time
                for analysis after each competition.
              </p>

              <div class="rounded-lg bg-yellow-50 p-4">
                <h3 class="mb-2 font-semibold text-yellow-900">
                  Appeal Timeline:
                </h3>
                <p class="text-yellow-800">
                  A Team Leader may file an appeal by completing an Appeal Form
                  and submitting it to the Scientific Committee at least 60
                  minutes prior to the final GA meeting of that competition day.
                </p>
              </div>

              <p>
                Every appeal will be reviewed by the Scientific Committee and
                the team leader will be notified of the committee's decision.
                All appeals and their resolution will be summarized at the final
                GA meeting of that competition day.
              </p>
            </div>
          </section>
        </div>

        <!-- Footer Note -->
        <div class="mt-12 rounded-lg bg-gray-100 p-6 text-center">
          <p class="text-sm text-gray-600">
            For the most up-to-date information and any additional details,
            please refer to the official IOI 2026 documentation and
            announcements.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
// SEO Meta
useSeoMeta({
  title: "Contest Rules - IOI 2026 Uzbekistan",
  ogTitle: "Contest Rules - IOI 2026 Uzbekistan",
  twitterTitle: "Contest Rules - IOI 2026 Uzbekistan",
  description:
    "Official contest rules and regulations for the International Olympiad in Informatics 2026 in Uzbekistan. Competition schedule, grading system, scoring, and guidelines.",
  ogDescription:
    "Official contest rules and regulations for the International Olympiad in Informatics 2026 in Uzbekistan. Competition schedule, grading system, scoring, and guidelines.",
  twitterDescription:
    "Official contest rules and regulations for the International Olympiad in Informatics 2026 in Uzbekistan. Competition schedule, grading system, scoring, and guidelines.",
  ogImage: "/images/hero/uz.png",
  ogImageUrl: "/images/hero/uz.png",
  twitterImage: "/images/hero/uz.png",
});
</script> 