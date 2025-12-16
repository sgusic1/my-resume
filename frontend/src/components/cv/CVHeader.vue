<script setup lang="ts">
import SocialIcon from "@/components/generic/SocialIcon.vue";
import Icon from "@/components/generic/Icon.vue";
import { CvContext } from "@/inject";
import myAvatar from "@/assets/me.png";

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
          <div class="name">Sabina Gušić</div>
          <SocialIcon
            name="location"
            text="Munich, Germany"
            class="opacity-50 text-md mb-1"
          />
          <SocialIcon name="mail" text="sabinagusic3@gmail.com" />
          <SocialIcon name="phone" text="+387644229143" />
          <SocialIcon v-if="false" name="web" text="veracioux.me" />
          <div class="socials">
            <SocialIcon name="github" text="sgusic1" />
            <SocialIcon name="linkedin" text="Sabina" />
          </div>
        </div>
        <div class="flex flex-col justify-between gap-2">
          <div>
            Junior Software Engineer with a background in Electrical Engineering
            and hands-on experience in software development. Built full-stack
            applications using JavaScript, TypeScript, React, Node.js, Python,
            and RESTful APIs. Familiar with object-oriented programming,
            databases, Docker and working in agile project environments. Eager
            to join a collaborative team where I can grow as a developer and
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
    align-items: center;

    .contact {
      display: flex;
      flex-direction: column;
      flex: 1 0 210px;

      .name {
        font-size: 1.6em;
        line-height: 1.4;
      }

      hr {
        opacity: 0.4;
      }
    }

    .socials {
      display: flex;
      flex-direction: column;
      gap: inherit;
    }
  }

  :deep(.icon) {
    height: 1.2em;
    line-height: 2em;
  }

  .avatarWrapper {
    position: relative;
    display: inline-block;
    padding-top: 2.35px;
    padding-bottom: 2.9px;
    padding-left: 3px;
    padding-right: 2.7px;

    @include common.beveledFrameAvatar(
      9px,
      3px,
      rgba(0, 0, 0, 0.54),
      var(--color-background-1)
    );
  }
  .avatar {
    position: relative;
    display: block;

    @include common.beveledEdges(7.5px);
  }
}
</style>
