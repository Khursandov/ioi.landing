<script setup lang="ts"></script>

<template>
  <section class="bg-white px-6 py-10">
    <div class="container mx-auto text-gray-900">
      <!-- Call for Tasks -->
      <h2 class="text-4xl font-bold text-[#002C9B] md:text-3xl">
        Call for Tasks
      </h2>
      <p class="my-8 text-2xl text-gray-700">
        The Asia-Pacific Informatics Olympiad (APIO) is an online IOI-like
        competition for the Asian and Western Pacific region. APIO 2025 will be
        held on 17-18 May 2025. The host of APIO 2025 invites everyone in the
        programming competitions community to submit tasks for the APIO 2025
        competition. Guidelines for tasks and instructions for submission are
        given below.
      </p>

      <!-- APIO Competition Tasks -->
      <h2 class="mt-8 text-4xl font-bold text-[#002C9B]">
        APIO Competition Tasks:
      </h2>
      <p class="my-8 text-2xl text-gray-700">
        APIO tasks are basically similar to the tasks in International Olympiad
        in Informatics (IOI), which are typically focused on the design of
        efficient, correct algorithms. Input and output are to be kept as simple
        as possible. The submission of novel tasks types not yet seen in any
        recent programming competitions is encouraged. The guidelines of task
        preparations of IOI should be considered, with no restriction. The
        documents about submission of IOI tasks, which can be used as reference
        to create the tasks, can be found on the IOI website. The materials of
        APIO 2024 can also be found at
        <a
          href="https://github.com/APIO-2024/apio2024_tasks"
          class="text-[#002C9B] underline hover:text-blue-700"
          >https://github.com/APIO-2024/apio2024_tasks</a
        >.
      </p>

      <p class="my-8 text-2xl text-gray-700">
        To ensure a fair and interesting competition for all, tasks should
        satisfy the following conditions:
      </p>
      <ul class="my-8 list-disc space-y-2 pl-6 text-2xl text-gray-700">
        <li>
          The tasks should not have been seen by any potential APIO 2025
          competitors.
        </li>
        <li>The tasks should not have been used in any similar competition.</li>
        <li>
          The tasks should be solvable by APIO competitors during an APIO
          competition round.
        </li>
        <li>
          The task descriptions should be unambiguous and easy to understand.
        </li>
        <li>The tasks should be culturally neutral.</li>
        <li>The tasks should be innovative.</li>
      </ul>
    </div>

    <div class="container mx-auto my-8 text-gray-900">
      <!-- Заголовок -->
      <h2 class="text-5xl font-bold text-[#002C9B] md:text-3xl">
        What to Submit?
      </h2>

      <!-- Основные требования -->
      <p class="mt-4 text-2xl font-semibold">A task submission must contain:</p>
      <ul class="my-8 mt-2 list-disc space-y-2 pl-6 text-2xl text-gray-700">
        <li>
          Statement in English, preferably formatted in PDF with required
          diagrams and pictures included.
        </li>
        <li>
          Description of the desired solution (a description of an algorithm
          which should get full score).
        </li>
        <li>
          Contact address (preferably one e-mail address) and background
          information on the task author(s): affiliation, country, and a
          description of the author’s role in the APIO or national olympiad,
          including training duties, over the period from APIO 2024 to APIO
          2025.
        </li>
      </ul>

      <!-- Рекомендации -->
      <p class="mt-6 text-2xl font-semibold">
        It is also strongly recommended to contain:
      </p>
      <ul class="my-8 mt-2 list-disc space-y-2 pl-6 text-2xl text-gray-700">
        <li>At least one implementation of the desired solution in C++.</li>
        <li>Analyses of alternative solutions.</li>
        <li>Suggestions for grading.</li>
        <li>Test data or ideas for generating test data.</li>
        <li>The motivation behind the task.</li>
      </ul>

      <p class="my-8 text-2xl text-gray-700">
        Any comments related to the task are also welcome and would be highly
        appreciated.<br />
        Submitted tasks must be kept in strict confidence until the end of APIO
        2025.
      </p>

      <!-- Notes -->
      <p class="mt-6 text-2xl font-semibold">NOTES:</p>
      <p class="my-8 mt-2 text-2xl text-gray-700">
        Please note that all material submitted becomes the property of the APIO
        community, and that by submitting the author is assigning the Copyright
        and all rights to the submitted materials to the APIO community.
      </p>
      <p class="my-8 mt-2 text-2xl text-gray-700">
        Note that we do not wish to forbid authors of submitted tasks to be
        involved in other competitions and training, but we do ask them to take
        all necessary precautions to safeguard confidentiality.
      </p>
      <p class="my-8 mt-2 text-2xl text-gray-700">
        Submitted tasks, including the description and test cases, may be
        subject to modifications by the scientific committee.
      </p>

      <!-- Submission Process -->
      <p class="mt-6 text-2xl font-semibold">SUBMISSION PROCESS:</p>
      <p class="my-8 mt-2 text-2xl text-gray-700">
        Task materials must be placed together in a single file (use .zip or
        .tgz for multiple files). Email to
        <strong>apio2025@digital.uz</strong> with
        <strong>[Task Submission] - &lt;task title&gt;</strong> as the subject
        and attach the task submission.
      </p>

      <!-- Task Selection Process -->
      <p class="mt-6 text-2xl font-semibold">TASK SELECTION PROCESS:</p>
      <ul class="my-8 mt-2 list-disc space-y-2 pl-6 text-2xl text-gray-700">
        <li>
          Tasks that are not used will be kept secret, and will be returned to
          their submitter so that they can be used elsewhere.
        </li>
        <li>
          All submitted tasks will be seen only by the host scientific
          committee, and the shortlisted tasks will be seen by all heads of
          delegations from the region.
        </li>
        <li>
          Communications among heads of delegations about the APIO tasks should
          be done mainly by e-mail and secured web.
        </li>
        <li>
          All submitted tasks will be shortlisted by the host of APIO 2025.
          Then, the shortlisted tasks are distributed to all heads of
          delegations.
        </li>
        <li>
          If any countries need to translate the task scripts to their
          languages, the translated script must be submitted to the host up to
          three days before the competition day.
        </li>
        <li>
          At various moments during the preparation of the APIO 2025
          competition, it is possible that submitted tasks are dropped from
          further consideration. However, it may still be necessary to revert
          such decisions later.
        </li>
        <li>
          In general, all submitted tasks, whether dropped or not, should be
          kept secret until the end of competition.
        </li>
        <li>
          Authors of submitted tasks will be recognized on the APIO 2025 website
          by listing their name, affiliation, and country (unless they
          specifically decline this).
        </li>
        <li>
          Each problem that’s actually used in the competition will be rewarded
          with UZS 5,000,000 or USD400 after the end of the event.
        </li>
      </ul>

      <!-- Заголовок -->
      <p class="text-2xl font-semibold">SUMMARY:</p>

      <ul class="my-8 list-disc space-y-2 pl-6 text-2xl text-gray-700">
        <li>Submission deadline: 20 April 2025 (23:59 in Tashkent time)</li>
        <li>Language: English</li>
        <li>Text format: PDF preferred</li>
        <li>
          Multiple files for one task (e.g. diagrams, solution code): in a
          single zip or compressed tar archive
        </li>
        <li>Multiple tasks: submit separately</li>
        <li>
          Minimum contents of submission:
          <ul
            class="my-8 mt-2 list-[circle] space-y-2 pl-6 text-2xl text-gray-700"
          >
            <li>
              author(s) information: name, e-mail, affiliation, country, and
              olympiad-role;
            </li>
            <li>task statement;</li>
            <li>description of the desired solution.</li>
          </ul>
        </li>
      </ul>

      <p class="my-8 text-2xl font-semibold text-gray-700">Also recommended:</p>
      <ul class="my-8 mt-2 list-decimal space-y-2 pl-6 text-2xl text-gray-700">
        <li>solution implementations in C++;</li>
        <li>suggestions for grading;</li>
        <li>test data;</li>
        <li>alternate solutions or expected near-solutions;</li>
        <li>background information on the task;</li>
        <li>any other comments relevant to the task.</li>
      </ul>

      <p class="my-8 text-2xl text-gray-700">
        <strong>Submission:</strong> Email to
        <strong>apio2025@digital.uz</strong> with
        <strong>[Task Submission] - &lt;task title&gt;</strong> (without
        quotation marks) as the subject.
      </p>

      <p class="my-8 text-2xl text-gray-700">
        Please direct questions about the call for tasks to
        <strong>apio2025@digital.uz</strong>.
      </p>
    </div>
  </section>
</template>

<style scoped></style>
