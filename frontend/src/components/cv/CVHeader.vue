<script setup lang="ts">
import SocialIcon from "@/components/generic/SocialIcon.vue";
import Icon from "@/components/generic/Icon.vue";
import { CvContext } from "@/inject";

const { variant } = CvContext.inject();

const interactiveCvUrl = new URL(`https://veracioux.me/cv`);
interactiveCvUrl.searchParams.set("resume", "true");
if (variant) {
  interactiveCvUrl.searchParams.set("variant", variant.toString());
}
</script>

<template>
  <ClientOnly>
    <div class="cvHeader relative flex justify-between items-start gap-5 mb-4">
      <div class="contactAndText">
        <div class="contact min-w-[192px]">
          <div class="name">Haris Gušić</div>
          <SocialIcon
            name="location"
            text="Munich, Germany"
            class="opacity-50 text-md mb-1"
          />
          <SocialIcon name="mail" text="sabinagusic3@gmail.com" />
          <SocialIcon name="phone" text="+387644229143" />
          <SocialIcon v-if="false" name="web" text="veracioux.me" />
          <div class="flex gap-8">
            <SocialIcon name="github" text="sgusic1" />
            <SocialIcon name="linkedin" text="Sabina" />
          </div>
        </div>
        <div class="flex flex-col justify-between gap-2">
          <div>
            Recent graduate in Electrical Engineering with a self-taught
            foundation in software development. Although my formal education
            focused on power systems, I pursued programming independently -
            building a few full-stack projects, learning JavaScript and Python
            amongst other technologies, and developing a foundation in general
            principles in programming. Eager to join a collaborative team where
            I can grow as a developer, bring a strong learning mindset, and
            contribute meaningfully.
          </div>
          <div
            v-if="false"
            class="inline-flex items-center gap-2 text-gray-500"
          >
            <Icon name="info" />
            <span>
              An interactive online version of this resume is available
              <a :href="interactiveCvUrl.toString()" target="_blank">here</a>.
            </span>
          </div>
        </div>
      </div>
    </div>
  </ClientOnly>
</template>

<style scoped lang="scss">
@use "@/assets/common.module.scss" as common;

.cvHeader {
  align-items: flex-start;

  padding: 24px 32px;

  @include common.beveledFrame(
    24px,
    2px,
    rgba(black, 0.4),
    var(--color-background-1)
  );

  .contactAndText {
    display: flex;
    gap: inherit;

    .contact {
      display: flex;
      flex-direction: column;

      .name {
        font-size: 1.6em;
        line-height: 1.4;
      }

      hr {
        opacity: 0.4;
      }
    }
  }

  :deep(.icon) {
    height: 1.2em;
    line-height: 2em;
  }
}
</style>
